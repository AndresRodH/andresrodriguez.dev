---
title: 'Making a Blog Post Views Counter With Firebase and Next.js'
description: 'A journey into how I built the viewer counter used in this blog'
date: '2020-11-09'
modifiedAt: '2020-11-15'
banner: '/images/count-blog-post-views-with-firebase/banner.png'
---

I'm very picky about the stuff I want to write. It makes it hard to finally sit down and do it! I need some content, something fun and engaging not only for a reader but for me as well. So I will start by learning in public and build a blog post view counter for this blog and document it as I go.

I love Firebase. It is such an amazing product and every time I use it it just feels like a breath of fresh air. I want to use Firebase because it has a very generous free tier and also the database offerings do what I need with very minimal setup required.

## Planning the work

1. Initialize project in the firebase console and enable a database
2. Initialize `firebase-admin` in the codebase
3. Add api routes to read and increment view counts
4. Read the counts from the database to display on the posts
5. Increment a post's view count when a user navigates to a post

Creating projects is pretty straightforward in the console. I actually created two so I can have a dev environment and a production environment to keep the view counts as true as possible.

I have thought about what I want to achieve with these data points and I really want to have them modeled in such a way that I can extend functionality later. For example, adding a "likes" or reactions feature just for fun and make the blog more interactive. The structure I want for my data is roughly this:

```json
{
  "posts": {
    "post-id": {
      "views": 0
    }
  }
}
```

## Building the data layer

I am going with `firebase-admin` because I will only use it for data fetching on the api routes. In order to initialize it I need to get a service account which I can get from the `Project settings` -> `Service Accounts` in the Firebase console. Now that I have my key generated, I only need a the client email and private key as I will only mess with database stuff.

```typescript
// lib/firebase-admin.ts
import * as admin from 'firebase-admin'

const projectId =
  process.env.NODE_ENV === 'development'
    ? 'andresrodriguez-dev-develop'
    : 'andresrodriguez-dev'

admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail: process.env.ADMIN_CLIENT_EMAIL,
    privateKey: process.env.ADMIN_PRIVATE_KEY,
    projectId,
  }),
  databaseURL: `https://${projectId}.firebaseio.com`,
})

export const db = admin.firestore()
```

At this point I have the projects created in the Firebase console and initialized in the code. Now it's time to set up the api route for reading the posts. This is what I came up with:

```typescript
// pages/api/post-stats.ts
import {NextApiRequest, NextApiResponse} from 'next'
import {db} from 'lib/firebase-admin'

export type PostStats = {
  views: number
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.id)
    return res.status(400).json({
      error:
        'Query parameter "id" is missing from the request, did you forget to include it?',
    })

  if (Array.isArray(req.query.id))
    return res.status(400).json({
      error: 'Multiple ids are not currently supported',
    })

  const postStatsRef = db.collection('posts').doc(req.query.id)

  const postStats = await db.runTransaction<PostStats>(async (t) => {
    const snapshot = await t.get(postStatsRef)
    let postStats: PostStats

    if (!snapshot.exists) {
      postStats = {
        views: 0,
      }
      t.set(postStatsRef, postStats)
    } else postStats = snapshot.data() as PostStats

    return postStats
  })

  return res.status(200).json(postStats)
}
```

Why a transaction? Well, the post may not have an entry yet so I need to guard against returning a null document. A transaction will allow me to read the data and if the post doesn't exist I will give it an initial value and return that to the client. Now let's test it.

```typescript
// lib/api.ts
import fetch from 'isomorphic-unfetch'

export async function getPostStats(id: string) {
  const stats = await fetch(
    `/api/post-stats?id=${encodeURIComponent(id)}`,
  ).then((r) => r.json())
  return stats
}
```

And then call it anywhere, see if it works.

```typescript
// pages/blog/[id].tsx
React.useEffect(() => {
  getPostStats(id)
}, [])
```

And it worked! Inspecting the response on the network tab shows `{ views: 0 }`

But now I'm getting a `FirebaseAppError: The default Firebase app already exists.` on the console. After some researching it's basically an issue with fast refresh, so it's very unlikely to happen in production. This did the trick for me.

```typescript
// lib/firebase-admin.ts
if (!admin.apps.length)
  admin.initializeApp({
    /*...*/
  })
```

All that's left as far as api routes go is to make the call to increment a post's view counter. For now I'll make another route inside of the `post-stats` route. I'll change the name of the route that I made previously and make it a dynamic route. Based from what I understood on the docs, getting the query parameters works the same way wether the id of the post were a querystring or a dynamic route param.

Moved stuff around and it does work as expected still. My folder structure now looks like this:

```bash
- pages/api/post-stats
+ pages/api/post-stats/[id].ts
+ pages/api/post-stats/view.ts
```

The logic in the view route is very similar to the other route. We attempt to get the data first and either increment the view count for the post or set it with some initial data.

```typescript
import {NextApiRequest, NextApiResponse} from 'next'
import {db} from 'lib/firebase-admin'
import {PostStats} from '.'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.id)
    return res.status(400).json({
      error:
        'Query parameter "id" is missing from the request, did you forget to include it?',
    })

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(400).json({
      error: `Method ${req.method} Not Allowed`,
    })
  }

  if (Array.isArray(req.query.id))
    return res.status(400).json({
      error: 'Cannot read multiple posts at once',
    })

  const postStatsRef = db.collection('posts').doc(req.query.id)

  const postStats = await db.runTransaction<PostStats>(async (t) => {
    const snapshot = await t.get(postStatsRef)
    let postStats: PostStats
    if (!snapshot.exists) {
      postStats = {
        views: 1,
      }
      t.set(postStatsRef, postStats)
    } else {
      postStats = snapshot.data() as PostStats
      postStats.views += 1
      t.update(postStatsRef, postStats)
    }

    return postStats
  })

  return res.status(200).json(postStats)
}
```

Let's see if it works 🤞

```typescript
// lib/api.ts
export async function incrementViews(id: string) {
  const stats = await fetch(`/api/post-stats/${id}/view`, {
    method: 'POST',
  }).then((r) => r.json())

  return stats
}
```

And call it on the blog post page

```typescript
// pages/blog/[id].tsx
React.useEffect(() => {
-  getPostStats(id)
- }, [])
+  incrementViews(id)
+ }, [id])
```

Success 🎉! In my network tab I got as a response `{ views: 1 }`

## Building the UI

I will actually keep the last bit of code for incrementing views on the dynamic post route. As far as reading goes, I will make a component that will fetch the views data and display it so I can reuse the views on a blog post list and the blog post page itself.

```typescript
import {getPostStats} from 'lib/api'
import {useEffect, useState} from 'react'

export function ViewCounter({id}: {id: string}) {
  const [views, setViews] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPostStats(id).then(({views}) => {
      setViews(views)
      setLoading(false)
    })
  }, [id])

  return loading ? '-----' : views
}
```

And display it on the blog post next to the published date. I have refreshed the page a couple of times, so the counter has gone up.

```typescript
// pages/blog/[id].tsx
<div className="my-4 text-center items-center">
  <time className="mr-4" dateTime={date}>
    {format(datePublished, 'LLLL d, yyyy')}
  </time>
  <ViewCounter id={id} />
</div>
```

## Summary

Building this view counter was a pretty fun experience. I have been a little out of the loop in frontend work ever since I joined the backend fulltime and these kinds of things are good for keeping up.

Firebase is as still as lovely as ever to work with. I don't think I've ever had a bad experience for basic things like these.

The way I built this will allow me to swap firebase with another database solution if deemed necessary thanks to not relying on Firebase it on the client.

Next.js is an awesome framework. I feel like this flow suits my expected DX better than Gatsby in its current state.

## Next steps

- I want to have the views update realtime-ish but I also want to keep it as simple as I can and not rely on `firebase` on the client. Instead, I'll add `react-query` to manage my server state and optimize some of these calls.
- I still need to build a `/blog` page or put the list of posts on the home page in which I will need to fetch all post views and display them alongside the post info. I'll probably just add it to the home page until I have written enough posts so that it requires a dedicated page.
- Since I am using two different firebase projects, one for dev and one for prod, I will have to set the appropriate environment variables for the production environment in Vercel.
