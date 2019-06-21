import React from "react"
import { graphql } from "gatsby"
import Base from "../layouts/Base"
import TagsMenu from "../components/TagsMenu"
import { BlogPageQuery } from "../generated"
import TagsProvider from "../components/BlogContentProvider"
import Posts from "../components/Posts"
import { rhythm } from "../utils/typography"
import Grid from "../components/Grid"

function BlogPage({ data }: { data: BlogPageQuery }) {
  const { posts, tags } = data

  return (
    <Base title="Blog" description="Personal Blog">
      <TagsProvider tagsList={tags.group} posts={posts.edges}>
        <Grid
          height="100%"
          gridTemplateColumns="minMax(150px, 200px) 1fr"
          gridTemplateAreas={'"tags posts"'}
          gridGap={`0 ${rhythm(1)}`}
        >
          <Grid.Item gridArea="posts">
            <Posts />
          </Grid.Item>
          <Grid.Item gridArea="tags">
            <TagsMenu />
          </Grid.Item>
        </Grid>
      </TagsProvider>
    </Base>
  )
}

export const query = graphql`
  query BlogPage {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            date
            tags
          }
        }
      }
    }
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        name: fieldValue
        count: totalCount
      }
    }
  }
`

export default BlogPage
