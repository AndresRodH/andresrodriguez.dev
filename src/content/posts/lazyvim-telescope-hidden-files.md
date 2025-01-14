---
title: "Show hidden files with Telescope in LazyNvim"
description: "How to configure Telecope to show hidden files in LazyNvim so dotfiles are visible while still respecting .gitignore"
publishedAt: 2024-01-19
tags:
  - neovim
---

When working on my dotfiles I was wondering why I couldn't see my `.config` folders. Telescope hides these hidden files by default. Here's how I set up Telescope to show hidden files using the LazyNvim distro:

```lua title="lua/plugins/telescope.lua"
local Util = require("lazyvim.util")

return {
 "nvim-telescope/telescope.nvim",
 keys = {
  -- enable finding hidden/dot files
  {
   "<leader><leader>",
   Util.telescope("files", { hidden = true, no_ignore = false }),
   desc = "Find files (root dir)",
  },
  {
   "<leader>ff",
   Util.telescope("files", { hidden = true, no_ignore = false }),
   desc = "Find files (root dir)",
  },
  {
   "<leader>fF",
   Util.telescope("files", { cwd = false, hidden = true, no_ignore = false }),
   desc = "Find files (cwd)",
  },
 },
}
```

Personally, I like how LazyNvim configures Telescope to search for files in the context of root directories -- this is very useful in monorepo setups. I kept that behavior by using LazyNvim's telescope utilities from `lazyvim.util`.

I then remapped the default keybindings for `<leader><leader>` and `<leader>ff` for searching files in the root directory and `<leader>fF` to find files in the current working directory as shown above.

Setting `hidden = true` allows to surface dotfiles/hidden files in search results and `no_ignore = false` makes it respect the project's `.gitignore`.
