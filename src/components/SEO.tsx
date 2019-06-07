import React from "react"
import Helmet, { HelmetProps } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"
import favicon64 from "../../static/favicon.png"

export type SEOProps = {
  description?: string
  lang?: string
  title: string
  meta?: HelmetProps["meta"]
}

function SEO({ description, lang, meta, title }: SEOProps) {
  const siteMetadata = useSiteMetadata()

  const metaDescription = description || siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${siteMetadata.title} | %s`}
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "64x64",
          href: `${favicon64}`,
        },
        { rel: "shortcut icon", type: "image/png", href: `${favicon64}` },
      ]}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: siteMetadata.author,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        ...meta,
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
}

export default SEO
