import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../layouts/Layout"

function BlogPostTemplate({ data, pageContext }) {
  const { next, prev } = pageContext
  const { html, frontmatter, excerpt } = data.markdownRemark
  const { title, description } = frontmatter

  return (
    <Layout title={title} description={description || excerpt}>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {next && <Link to={`/blog/${next.frontmatter.path}`}>Next</Link>}
      {prev && <Link to={`/blog/${prev.frontmatter.path}`}>Previous</Link>}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        description
      }
    }
  }
`

export default BlogPostTemplate
