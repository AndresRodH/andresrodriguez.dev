/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Link from '../components/Link'
import SEO from '../components/SEO'

export default function Home({ data }) {
  const { description } = data.site.siteMetadata
  const { totalCount, edges: posts } = data.allMdx

  return (
    <Layout>
      <SEO />
      <div
        sx={{
          variant: 'textStyles.display',
          fontSize: [4, 5],
          fontWeight: 400,
          mb: 4,
        }}
      >
        {description}
      </div>
      <span>
        {totalCount} Post{totalCount > 1 && 's'}
      </span>
      <ul
        sx={{
          listStyle: 'none',
          mb: 5,
          p: 0,
        }}
      >
        {posts.map(({ node }) => (
          <li key={node.id} sx={{ mt: 2 }}>
            <Styled.h3
              sx={{
                m: 0,
              }}
            >
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </Styled.h3>
            <small sx={{ fontWeight: 'bold' }}>{node.frontmatter.date}</small>
            <Styled.p sx={{ m: 0 }}>{node.frontmatter.description}</Styled.p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
    allMdx {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
