import * as React from 'react'
import {graphql} from 'gatsby'
import {SEO} from 'components/seo'
import {MDXRenderer} from 'gatsby-plugin-mdx'

export default function BlogPost({data}) {
  const post = data.mdx
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        slug={post.fields.slug}
      />
      <article className="prose prose-lg container px-4 mx-auto">
        <h1>{post.frontmatter.title}</h1>
        <strong>{post.frontmatter.description}</strong>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      body
      frontmatter {
        title
        description
      }
      excerpt
      fields {
        slug
      }
    }
  }
`
