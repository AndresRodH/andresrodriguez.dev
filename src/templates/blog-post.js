import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function BlogPost({ data }) {
  const post = data.mdx
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        slug={post.fields.slug}
      />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
      excerpt
      fields {
        slug
      }
    }
  }
`
