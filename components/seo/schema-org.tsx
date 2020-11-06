import {memo} from 'react'
import Head from 'next/head'
import config from 'config'

type BaseProps = {
  title: string
  url: string
  defaultTitle: string
}

type Props = BaseProps &
  (
    | {
        isBlogPost: true
        author: string
        canonicalUrl: string
        datePublished: string
        dateModified?: string
        description: string
        image: string
        organization: typeof config.organization
      }
    | {
        isBlogPost: false
      }
  )

function SchemaOrgComponent(props: Props) {
  const {url, title, defaultTitle} = props
  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: defaultTitle,
    },
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let schema = [...(baseSchema as any)]

  if (props.isBlogPost) {
    const {
      image,
      author,
      description,
      dateModified,
      datePublished,
      organization,
      canonicalUrl,
    } = props
    schema = [
      ...schema,
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
          url: organization.url,
          logo: {
            '@type': 'ImageObject',
            url: organization.logo.url,
            width: organization.logo.width,
            height: organization.logo.height,
          },
          name: organization.name,
        },
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': canonicalUrl,
        },
        datePublished,
        dateModified,
      },
    ]
  }

  return (
    <Head>
      {/* Schema.org tags */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Head>
  )
}

export const SchemaOrg = memo(SchemaOrgComponent)
