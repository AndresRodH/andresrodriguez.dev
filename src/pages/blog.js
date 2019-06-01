import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Header from "../components/Header"
import Layout from "../layouts/Layout"

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function BlogLayout({ data }) {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout title="Blog" description="Personal Blog">
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
    </Layout>
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
