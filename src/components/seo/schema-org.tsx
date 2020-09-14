import * as React from 'react'
import {Helmet} from 'react-helmet'

type Props = {
  author: string
  canonicalUrl: string
  datePublished: string
  dateModified?: string
  defaultTitle: string
  description: string
  image: string
  isBlogPost: boolean
  organization: NonNullable<
    NonNullable<NonNullable<GatsbyTypes.SEOQuery['site']>['siteMetadata']>
  >['organization']
  title: string
  url: string
}

function SchemaOrgComponent({
  author,
  canonicalUrl,
  datePublished,
  defaultTitle,
  description,
  image,
  isBlogPost,
  organization,
  title,
  url,
  dateModified,
}: Props) {
  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: defaultTitle,
    },
  ]

  const schema = isBlogPost
    ? [
        ...baseSchema,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: defaultTitle,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Organization',
            url: organization!.url,
            logo: {
              '@type': 'ImageObject',
              url: organization!.logo!.url,
              width: organization!.logo!.width,
              height: organization!.logo!.height,
            },
            name: organization!.name,
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': canonicalUrl,
          },
          datePublished,
          dateModified,
        },
      ]
    : baseSchema

  return (
    <Helmet>
      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export const SchemaOrg = React.memo(SchemaOrgComponent)
