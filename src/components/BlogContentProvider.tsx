import React from "react"
import { BlogPageQuery } from "../generated"

type Tag = {
  count: number
  isActive: boolean
}
type Tags = { [key: string]: Tag }
type TagsContext = {
  tags: Tags
  /**
   * Toggles the tag state
   * @param tagName the tag's text
   */
  toggle: (tagName: string) => void
  /**
   * Clears state of all tags
   */
  clear: () => void
}

type TagsList = BlogPageQuery["tags"]["group"]
type Posts = BlogPageQuery["posts"]["edges"]
export const TagsContext = React.createContext<TagsContext>(undefined)
export const PostsContext = React.createContext<Posts>(undefined)

type Props = { tagsList: TagsList; posts: Posts }
const BlogContentProvider: React.FC<Props> = ({
  children,
  tagsList,
  posts,
}) => {
  ////////////// TAGS //////////////
  // normalize tags
  const initTags = () =>
    tagsList.reduce(
      (acc, { count, name }) => {
        acc[name] = { count, isActive: false }
        return acc
      },
      {} as Tags
    )
  const [tags, setTags] = React.useState(initTags)

  function toggle(tagName: string) {
    const tag = tags[tagName]
    // noop
    if (!tag) return
    setTags(tags => {
      return {
        ...tags,
        [tagName]: {
          ...tag,
          isActive: !tag.isActive,
        },
      }
    })
  }

  function clear() {
    setTags(initTags)
  }

  ////////////// POSTS //////////////
  const activeTags = Object.entries(tags).reduce(
    (acc, [name, { isActive }]) => {
      if (isActive) acc.push(name)
      return acc
    },
    []
  )
  // get visible posts from filters
  const visiblePosts = Boolean(activeTags.length)
    ? posts.filter(post => {
        const { tags: postTags } = post.node.frontmatter
        return postTags.some(tag => activeTags.includes(tag))
      })
    : posts

  return (
    <TagsContext.Provider value={{ tags, toggle, clear }}>
      <PostsContext.Provider value={visiblePosts}>
        {children}
      </PostsContext.Provider>
    </TagsContext.Provider>
  )
}

export default BlogContentProvider
