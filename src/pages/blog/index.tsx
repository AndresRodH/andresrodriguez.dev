import React from "react"
import { graphql } from "gatsby"
import Base from "../../layouts/Base"
import TagsMenu from "./TagsMenu"
import { BlogPageQuery } from "../../generated"
import ActiveTags from "./ActiveTags"
import Posts from "./Posts"

function BlogPage({ data }: { data: BlogPageQuery }) {
  const { posts, tags } = data

  return (
    <Base title="Blog" description="Personal Blog">
      <ActiveTags>
        <Posts posts={posts.edges} />
        <TagsMenu tags={tags.group} />
      </ActiveTags>
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
