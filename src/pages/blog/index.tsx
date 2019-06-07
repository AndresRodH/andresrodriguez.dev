import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Base from "../../layouts/Base"
import TagsMenu from "./TagsMenu"
import { BlogPageQuery } from "../../generated"

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function BlogPage({ data }: { data: BlogPageQuery }) {
  const [activeTagNames, setactiveTagNames] = React.useState<string[]>([])
  const { posts, tags } = data

  // controls to add, remove and clear tag filters on posts
  const pushActiveTagName = (name: string) =>
    setactiveTagNames(tags => tags.concat(name))
  const removeActiveTagName = (name: string) =>
    setactiveTagNames(tags => tags.filter(tag => !(tag === name)))
  const clearActiveTags = () => setactiveTagNames([])

  // get visible posts from filters
  const visiblePosts = Boolean(activeTagNames.length)
    ? posts.edges.filter(edge => {
        const { tags } = edge.node.frontmatter
        return tags.some(tag => activeTagNames.includes(tag))
      })
    : posts.edges

  return (
    <Base title="Blog" description="Personal Blog">
      {visiblePosts.map(edge => {
        const { path, title } = edge.node.frontmatter

        return (
          <LinksContainer key={path}>
            <Link to={"/blog".concat(path)}>{title}</Link>
          </LinksContainer>
        )
      })}

      <TagsMenu
        pushActiveTagName={pushActiveTagName}
        removeActiveTagName={removeActiveTagName}
        activeTagNames={activeTagNames}
        clearActiveTags={clearActiveTags}
        tags={tags.group}
      />
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
