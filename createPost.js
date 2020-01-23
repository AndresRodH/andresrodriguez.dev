const fs = require('fs')
const path = require('path')
const slugify = require('@sindresorhus/slugify')
require('colors')

// get title from command line for frontmatter
const [title] = process.argv.slice(2)

if (!title) {
  console.error('A title has to be provided'.red)
  return
}

const date = new Date().toISOString().split('T')[0]
const slug = slugify(title)
const dirPath = path.join(process.cwd(), '/content/posts/', slug)

const template = `
---
title: ${title}
slug: ${slug}
date: ${date}
---

Hello World
`.trim()

// make post entry folder with an empty images folder
fs.mkdirSync(path.join(dirPath, '/images'), { recursive: true })

// add template
fs.writeFile(path.join(dirPath, '/index.mdx'), template, error => {
  if (error) console.error('Something went wrong:'.red, error)
  else console.log('Post created successfully'.green)
})
