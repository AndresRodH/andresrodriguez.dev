import React from "react"
import { BlogPageQuery } from "../generated"
import { useActiveTags } from "./ActiveTags"
import styled from "styled-components"
import PostCard from "./PostCard"
import Grid from "./Grid"
import { rhythm } from "../utils/typography"

export const autoGrid = (minColumnWidth = 300, gridGap = 0) => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
  gridGap,
})

const Gallery = styled.div({
  ...autoGrid(300, 15),
  height: "100%",
})

function Posts({ posts }: { posts: BlogPageQuery["posts"]["edges"] }) {
  // get visible posts from filters
  const activeTags = useActiveTags()
  const visiblePosts = Boolean(activeTags.length)
    ? posts.filter(post => {
        const { tags: postTags } = post.node.frontmatter
        return postTags.some(tag => activeTags.includes(tag))
      })
    : posts

  return (
    <Grid
      height="100%"
      gridTemplateColumns={`repeat(auto-fill, minmax(${rhythm(10)}, 1fr))`}
      gridGap={rhythm(1)}
    >
      {visiblePosts.map(({ node: { frontmatter } }, i) => (
        <PostCard key={i} {...frontmatter} />
      ))}
    </Grid>
  )
}

export default Posts
