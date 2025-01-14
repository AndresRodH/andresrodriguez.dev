---
title: "TIL: Vim macros"
description: "Today I learned how to repeat a sequence of commands in Vim using macros"
publishedAt: 2024-01-26
tags:
  - TIL
  - neovim
  - vim
---

I was refactoring a bunch of imports. We use `remix-utils` in our Remix codebase at work and we have been on v4 for quite a long time. This version exported some utility functions for http responses

```ts
import { badRequest, serverError, forbidden } from "remix-utils";
```

Latest versions do _not_ export these functions anymore, so I replicated them in a utility file.

```ts
// File: utils/http.server.ts
import { json } from "@remix-run/node";

export function badRequest<Data = unknown>(
 data: Data,
 init?: Omit<ResponseInit, "status">,
) {
 return json(data, { ...init, status: 400 });
}

// ... other HTTP helpers
```

I wish I could've just find-and-replace-all, but some of the imports were mixed with other non-http imports!

The flow was:

1. Grep for `remix-utils` imports
2. Replace the import with `~/utils/http.server`
3. Save the buffer
4. Close the buffer
5. Repeat

I cannot automate the `grep`'ing, but I can for sure automate the rest. Finally, the time to learn about Vim macros has come to save my sanity.

First, start recording the macro pressing `q`. Then, press the key you want to use a register. I chose `j`:

```vim
qj
```

Second, record the actions. I have a remap on `<leader>bd` to delete the buffer:

```vim "ci'~/utils/http.server<esc>" ins=":w" del="<leader>bd"
ci'~/utils/http.server<esc>:w<leader>bd
```

This will:

1. Change the text inside the `'` quotes to `~/utils/http.server`
2. Save the buffer
3. Close the buffer

And to finish, stop recording the macro pressing `q` again.

```vim
q
```

Now I just had to play the macro with `@j` and it would repeat the whole sequence 🤯. I saved so much time with this!
