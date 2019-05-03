import React from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

function SEO() {
  const { title, description, siteUrl, social } = useSiteMetadata()
  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={social.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SEO
