import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Base from "../layouts/Base"

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function BlogLayout({ data }) {
  const { edges } = data.allMarkdownRemark

  return (
    <Base title="Blog" description="Personal Blog">
      {edges.map(edge => {
        const { frontmatter } = edge.node
        return (
          <LinksContainer key={frontmatter.path}>
            <Link to={"/blog".concat(frontmatter.path)}>
              {frontmatter.title}
            </Link>
          </LinksContainer>
        )
      })}
      <div>
        <Link to="/blog/tags">Browse by Tag</Link>
      </div>
    </Base>
  )
}

export const query = graphql`
  query BlogPageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default BlogLayout
