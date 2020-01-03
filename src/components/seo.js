import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title, slug }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `,
  )

  const metaDescription = description || siteMetadata.description
  const url = `${siteMetadata.siteUrl}${slug}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      {...(title
        ? {
            titleTemplate: `%s — ${siteMetadata.title}`,
            title,
          }
        : {
            title: `${siteMetadata.title}`,
          })}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'image',
          content: siteMetadata.image,
        },
        {
          property: 'og:image',
          content: siteMetadata.image,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:title',
          content: title || siteMetadata.title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.social.twitter,
        },
        {
          name: 'twitter:title',
          content: title || siteMetadata.title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  slug: '',
  title: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  slug: PropTypes.string,
}

export default SEO
