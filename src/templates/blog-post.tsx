import * as React from 'react'
import {graphql} from 'gatsby'
import {SEO} from 'components/seo/seo'
import {MDXRenderer} from 'gatsby-plugin-mdx'

export default function BlogPost({data}: {data: GatsbyTypes.BlogPostQuery}) {
  const post = data.mdx!
  const {title, description, date} = post.frontmatter!

  return (
    <>
      <SEO title={title} description={post.excerpt} datePublished={date} />
      <article className="prose prose-lg container px-4 mx-auto">
        <h1>{title}</h1>
        <strong>{description}</strong>
        <MDXRenderer>{post.body}</MDXRenderer>
      </article>
    </>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      body
      frontmatter {
        title
        description
        date
      }
      excerpt
      fields {
        slug
      }
    }
  }
`
