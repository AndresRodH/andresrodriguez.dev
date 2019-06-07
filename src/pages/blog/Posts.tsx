import React from "react"
import { BlogPageQuery } from "../../generated"
import { useActiveTags } from "./ActiveTags"
import { Link } from "gatsby"
import styled from "styled-components"

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
function Posts({ posts }: { posts: BlogPageQuery["posts"]["edges"] }) {
  // get visible posts from filters
  const activeTags = useActiveTags()
  const visiblePosts = Boolean(activeTags.length)
    ? posts.filter(post => {
        const { tags } = post.node.frontmatter
        return tags.some(tag => activeTags.includes(tag))
      })
    : posts

  return (
    <>
      {visiblePosts.map(edge => {
        const { path, title } = edge.node.frontmatter

        return (
          <LinksContainer key={path}>
            <Link to={"/blog".concat(path)}>{title}</Link>
          </LinksContainer>
        )
      })}
    </>
  )
}

export default Posts
