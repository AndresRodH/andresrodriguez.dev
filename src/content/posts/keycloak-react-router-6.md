---
title: "Authentication with Keycloak and React Router 6"
description: "Use Keycloak to add authentication to your React Router 6 application using the new data apis"
publishedAt: 2024-01-23
tags:
  - react
---

React Router 6 stopped being "just a router". The new data apis not only change the way we think about routing in React applications, but also about how we handle data fetching and mutations. In this post we will go over a simple example on how to use Keycloak to add authentication to your React Router 6 app using the new data apis.

All the exploratory code I wrote for this post is on [GitHub](https://github.com/AndresRodH/keycloak-react-router-6#set-up-keycloak), including a [simple Keycloak setup](https://github.com/AndresRodH/keycloak-react-router-6/blob/main/docker-compose.yml) if you need one. Just follow the instructions in the `README` to get it running.

## Application overview

I don't want to go into a lot of detail about the application itself as this post is intended to help you add it to your application.

Let's say we have an application that has some pages that the user can access without being logged in, and some that require authentication. In a traditional React Router 5 application we would create a custom component that checks the auth state via an auth provider and redirects to the login page if the user is not logged in:

```tsx
export function ProtectedRoute({ children }: { children: React.ReactNode }) {
 const auth = useAuth();

 return auth.isAuthenticated ? children : <Redirect to="/login" />;
}
```

1. We would create an `AuthContext` that provides the auth state to the rest of the application.
2. We would wrap the application with the `AuthContext.Provider` and pass the auth state to it.
3. We would create a `useAuth` hook that returns the auth state from the `AuthContext`.
4. We would use the `ProtectedRoute` component and the `render` prop in the `Route` component from React Router.
5. We would use the `useAuth` hook to check the auth state and redirect the user to the login page if they are not authenticated.

```tsx
export function App() {
 return (
  <AuthProvider>
   <BrowserRouter>
    <Switch>
     <Route path="/">This is public</Route>
     <Route
      path="/protected"
      render={() => <ProtectedRoute>This is protected</ProtectedRoute>}
     />
    </Switch>
   </BrowserRouter>
  </AuthProvider>
 );
}
```

Let's see how we can do this with the data router.

## Using the data router

The first thing we need to do is transform that router into a data router:

```tsx
// File: src/main.tsx
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "../path/to/provider";
import { ProtectedRoute } from "../path/to/component";

const router = createBrowserRouter([
 {
  path: "/",
  element: <>This is public</>,
 },
 {
  path: "/protected",
  element: <ProtectedRoute>This is protected</ProtectedRoute>,
 },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
 <React.StrictMode>
  <AuthProvider>
   <RouterProvider router={router} />
  </AuthProvider>
 </React.StrictMode>,
);
```

Because in React Router 6 there's no `Redirect` component, we will have to replace it with `Navigate`:

```diff lang="tsx"
export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const auth = useAuth()

-  return auth.isAuthenticated ? children : <Redirect to="/login" />
+  return auth.isAuthenticated ? children : <Navigate to="/login" />
}
```

This works... but, we can do better. Let's use the data api to remove the `AuthProvider` and `useAuth` hook.

### Initializing Keycloak

The first step is to have `keycloak-js` installed with any package manager you want. We will be working on a series of abstractions to handle auth cases in a case-by-case basis.

An important thing to note is that we can only initialize `keycloak-js` once. I do this trick to save the instance in a variable and return it if it's already initialized:

```ts
// File: src/lib/auth.ts
import Keycloak from "keycloak-js";

let keycloak: Keycloak | undefined;

/**
 * Returns the Keycloak instance. This function will make sure that the Keycloak instance is only initialized _once_
 */
async function getKeycloak() {
 if (keycloak) {
  return keycloak;
 }

 keycloak = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
 });

 await keycloak.init({
  onLoad: "check-sso", // this lets us check if the user is already authenticated as soon as we initialize Keycloak
  redirectUri: "http://localhost:5173", // or whatever your app's url is
 });

 return keycloak;
}
```

With this function we can create a couple of helper functions to handle authentication for us. For example, we can create a `getProfile` function that returns the user's profile if they are authenticated:

```ts
// File: src/lib/auth.ts
/**
 * Returns the user's profile if they are logged in, or `null` if they are not
 */
async function getUserProfile() {
 const keycloak = await getKeycloak();

 if (keycloak.authenticated) {
  const profile = await keycloak.loadUserProfile();
  return profile;
 }

 return null;
}
```

Because we set `onLoad: "check-sso"` on the `init` function, we can be confident that the instance can effectively determine if the user is already logged in.

### Protecting routes

We will be protecting routes by using a `loader` function for out protected route. But first, I will make a helper function to require authentication and redirect the user to the login page if they are not logged in:

```ts
// File: src/lib/auth.ts
// ...
import { redirect } from "react-router-dom";
// ...

/**
 * Requires that the user is logged in. Returns the user's profile if they are and throws a redirect if they are not.
 */
export async function requireUser() {
 const keycloak = await getKeycloak();

 const profile = await getUserProfile();

 if (profile) {
  return profile;
 }

 // user is not logged in
 const loginUrl = keycloak.createLoginUrl({
  redirectUri: window.location.origin + window.location.pathname,
 });

 throw redirect(loginUrl);
}
```

Now, let's make our new protected route and add it to our router config:

```tsx
// File: src/routes/protected.tsx
import { requireUser } from "../lib/auth";
import { useLoaderData } from "react-router-dom";

export async function loader() {
 const profile = await requireUser();
 return { profile };
}

export default function ProtectedRoute() {
 const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;
 return <div>Hello, {data.profile.username}!</div>;
}
```

```diff lang="tsx"
// File: src/main.tsx
// ...
-import { ProtectedRoute } from '../path/to/component'
+import ProtectedRoute, { loader as protectedLoader } from './routes/protected'

const router = createBrowserRouter([
  {
    path: '/',
    element: <>This is public</>
  },
  {
    path: '/protected',
-    element: <ProtectedRoute>This is protected</ProtectedRoute>
+    loader: protectedLoader,
+    element: <ProtectedRoute />
  }
])
// ...
```

Now if you try to access `/protected` without being logged in, you will be redirected to Keycloak's login page. If you are logged in, you will see your username.

### Logging users out

We will be using a React Router `action` for this. But first, let's make a helper function:

```ts
// File: src/lib/auth.ts

/**
 * Logs the user out
 */
export async function logout() {
 const keycloak = await getKeycloak();

 if (keycloak.authenticated) {
  await keycloak.logout();
 }
}
```

Now let's build our action

```diff lang="tsx"
// File: src/routes/protected.tsx
-import { useLoaderData } from 'react-router-dom'
+import { Form, useLoaderData } from 'react-router-dom'

// ...

+export async function action() {
+  await logout()
+}

export default function ProtectedRoute() {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>
-  return <div>Hello, {data.profile.username}!</div>
+  return (
+    <div>
+      Hello, {data.profile.username}!
+      <Form method="POST">
+        <button type="submit">Logout</button>
+      </Form>
+    </div>
+  )
}
```

```diff lang="tsx"
// File: src/main.tsx
// ...
-import ProtectedRoute, { loader as protectedLoader } from './routes/protected'
+import ProtectedRoute, {
+  loader as protectedLoader,
+  action as protectedAction,
+} from './routes/protected'

const router = createBrowserRouter([
  {
    path: '/',
    element: <>This is public</>
  },
  {
    path: '/protected',
    loader: protectedLoader,
+    action: protectedAction,
    element: <ProtectedRoute />
  }
])
// ...
```

Now if you click on the logout button, you will be logged out. Because React Router will call all loaders again after submitting a form, we will be kicked to the login page once more.

### Bonus: app-wide auth protection

In most scenarios, especially if you are building an SPA, there's no use-case on having pages that are public. With Keycloak you would be using their hosted UI and leveraging redirects, anyway. A single change is needed to make the app-wide auth protection work:

```diff lang="ts"
await keycloak.init({
-  onLoad: "check-sso",
+  onLoad: "login-required",
  // ...
});
```

That's it! Ideally, you would call this as soon as you can in your code. I would put this on `src/main.tsx`, let's refactor the code a little:

```ts
// File: src/lib/auth.ts
export const keycloak = new Keycloak({
 // ...
});

// update all usages of `getKeycloak` to just use `keycloak` directly
```

```ts
// File: src/main.tsx
// ...
import { keycloak } from "./lib/auth";

await keycloak.init({
 onLoad: "login-required",
 // ...
});

const router = createBrowserRouter([
 // ...
]);
```

You can check the full diff in the example in [this PR](https://github.com/AndresRodH/keycloak-react-router-6/pull/2).

## Conclusion

Leveraging the data api for React Router can simplify a lot of the code. Since we don't have to participate in React's lifecycle, using libraries like `keycloak-js` becomes a lot easier. Not only that, but we can also leverage the `action` function to handle things like logging out in just a couple lines.

I love React, but sometimes having to rely on React integrations for libraries or building your own the "React way" can be quite cumbersome. I am a big fan of React Router 6's data api, I believe that this is a huge DX improvement over having to build custom components and hooks.
