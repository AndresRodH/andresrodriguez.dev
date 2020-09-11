import * as React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function Home({data}) {
  const {edges} = data.allMdx

  return (
    <>
      <SEO />
      <Layout>
        <main className="container mx-auto flex justify-center px-4">
          <ul className="list-none grid grid-cols-1 gap-4">
            {edges.map(({node}) => (
              <li key={node.id}>
                <h1 className="font-bold text-2xl hover:text-blue-500">
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </h1>
                <h2 className="font-bold text-xl text-gray-600">
                  {node.frontmatter.description}
                </h2>
                <p className="prose my-4">{node.excerpt}</p>
                <Link
                  className="text-lg font-bold hover:text-blue-500"
                  to={node.fields.slug}
                >
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
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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
