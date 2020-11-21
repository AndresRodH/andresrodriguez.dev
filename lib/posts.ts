import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import renderToString from 'next-mdx-remote/render-to-string'

export type PostFrontmatter = {
  title: string
  description: string
  date: string
  modifiedAt?: string
  banner: string
}

const postsDirectory = path.join(process.cwd(), '_content/posts')

export type GetSortedPostsData = PostFrontmatter & {id: string}
export function getSortedPostsData(): GetSortedPostsData[] {
  // Get file names under _content/posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as PostFrontmatter),
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds(): {params: {id: string}}[] {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  const mdxSource = await renderToString(matterResult.content)

  // Combine the data with the id
  return {
    id,
    contentHtml,
    mdxSource,
    frontMatter: matterResult.data as PostFrontmatter,
  }
}

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: never[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T

export type PostData = Unpacked<ReturnType<typeof getPostData>>
