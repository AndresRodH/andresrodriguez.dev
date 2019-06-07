import { useStaticQuery, graphql } from "gatsby"
import { SiteMetaDataQuery } from "../generated"

function useSiteMetadata(): SiteMetaDataQuery["site"]["siteMetadata"] {
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
