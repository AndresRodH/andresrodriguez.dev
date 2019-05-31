import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Header from "../components/Header"

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function BlogLayout({ data }) {
  const { edges } = data.allMarkdownRemark

  return (
    <div>
      <Header />
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
    </div>
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
