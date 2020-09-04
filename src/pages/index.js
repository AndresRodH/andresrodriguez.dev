import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Link from '../components/Link'
import SEO from '../components/SEO'

export default function Home({ data }) {
  const { description } = data.site.siteMetadata
  const { edges } = data.allMdx

  return (
    <>
      <SEO />
      <Layout>
        <main className="container mx-auto px-4">
          <p className="text-4xl py-10">{description}</p>
          <ul className="list-none">
            {edges.map(({ node }) => (
              <li key={node.id} className="mt-8">
                <h1 className="font-bold text-2xl">
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </h1>
                <h2 className="font-bold text-xl text-gray-600">
                  {node.frontmatter.description}
                </h2>
                <p className="prose my-4">{node.excerpt}</p>
                <Link className="text-lg font-bold" to={node.fields.slug}>
                  Read more
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
          }
          excerpt(truncate: false, pruneLength: 250)
          fields {
            slug
          }
        }
      }
    }
  }
`
