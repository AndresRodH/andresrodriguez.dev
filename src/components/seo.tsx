import React from 'react'
import Helmet from 'react-helmet'
import {useStaticQuery, graphql} from 'gatsby'

type Props = Partial<{
  lang: string
  title: string
  slug: string
  description: string
  meta: any[]
}>

export function SEO({
  description,
  lang = 'en',
  meta = [],
  title,
  slug = '',
}: Props) {
  const data = useStaticQuery<GatsbyTypes.SEOQuery>(
    graphql`
      query SEO {
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

  const {siteMetadata} = data!.site!
  const metaDescription = description || siteMetadata!.description
  const url = `${siteMetadata!.siteUrl}${slug}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      {...(title
        ? {
            titleTemplate: `%s — ${siteMetadata!.title}`,
            title,
          }
        : {
            title: `${siteMetadata!.title}`,
          })}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'image',
          content: siteMetadata!.image,
        },
        {
          property: 'og:image',
          content: siteMetadata!.image,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:title',
          content: title || siteMetadata!.title,
        },
        {
          property: 'og:site_name',
          content: 'Andrés Rodríguez',
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
          content: siteMetadata!.social!.twitter,
        },
        {
          name: 'twitter:title',
          content: title || siteMetadata!.title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}
