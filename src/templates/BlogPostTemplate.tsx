import React from "react"
import { Link, graphql } from "gatsby"
import Base from "../layouts/Base"
import { BlogPostQuery } from "../generated"

type PostFrontmatter = {
  path: string
  title: string
}

type PostNode = {
  frontmatter: PostFrontmatter
}

type BlogPostPageContext = {
  slug: string
  prev: PostNode | null
  next: PostNode | null
}

type Props = {
  data: BlogPostQuery
  pageContext: BlogPostPageContext
}

function BlogPostTemplate({ data, pageContext }: Props) {
  const { next, prev } = pageContext
  const { html, frontmatter, excerpt } = data.markdownRemark
  const { title, description } = frontmatter

  return (
    <Base title={title} description={description || excerpt}>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {next && <Link to={"/blog".concat(next.frontmatter.path)}>Next</Link>}
      {prev && <Link to={"/blog".concat(prev.frontmatter.path)}>Previous</Link>}
    </Base>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
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
