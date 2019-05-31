import React from "react"
import { Link, graphql } from "gatsby"

function BlogPostTemplate({ data, pageContext }) {
  const { next, prev } = pageContext
  const { html, frontmatter } = data.markdownRemark
  const { title, excerpt } = frontmatter

  return (
    <div>
      <h1>{title}</h1>
      <h2>{excerpt}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {next && <Link to={next.frontmatter.path}>Next</Link>}
      {prev && <Link to={prev.frontmatter.path}>Previous</Link>}
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
        excerpt
      }
    }
  }
`

export default BlogPostTemplate
