import { useStaticQuery, graphql } from "gatsby"

function useSiteMetadata() {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author
            description
            siteUrl
            social {
              twitter
            }
            title
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
