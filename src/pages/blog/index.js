import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Base from "../../layouts/Base"
import TagsMenu from "./TagsMenu"

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function BlogLayout({ data, location }) {
  const { posts, tags } = data
  const [activeTagNames, setactiveTagNames] = React.useState([])

  const pushTagName = name => setactiveTagNames(tags => tags.concat(name))
  const removeTagName = name =>
    setactiveTagNames(tags => tags.filter(tag => !(tag === name)))

  return (
    <Base title="Blog" description="Personal Blog">
      {posts.edges.map(edge => {
        const { path, title } = edge.node.frontmatter

        return (
          <LinksContainer key={path}>
            <Link to={"/blog".concat(path)}>{title}</Link>
          </LinksContainer>
        )
      })}

      <TagsMenu
        pushTagName={pushTagName}
        removeTagName={removeTagName}
        activeTagNames={activeTagNames}
        tags={tags.group}
      />
    </Base>
  )
}

export const query = graphql`
  query BlogPageQuery {
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

export default BlogLayout
