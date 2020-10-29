import React from 'react'
import Head from 'next/head'
import config from 'config'
import {useRouter} from 'next/router'
import {SchemaOrg} from './schema-org'

type BaseProps = {
  lang: string
  title: string
  description: string
  image: string
  isBlogPost: boolean
}

type Props = BaseProps &
  ({isBlogPost: true; datePublished: string} | {isBlogPost: false})

export function SEO(props: Props) {
  const {title, description, image} = props
  const {pathname} = useRouter()

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    image: defaultImage,
    social,
    author,
    organization: org,
  } = config

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    twitterUsername: social.twitter,
    author: author,
    organization: {
      name: org.name,
      logo: org.logo,
      url: org.url,
    },
  }

  return (
    <>
      <Head>
        <title>{`${seo.title} | ${title}`}</title>
        {/* general */}
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />

        {/* OpenGraph */}
        <meta property="og:url" content={seo.url} />
        <meta
          property="og:type"
          content={props.isBlogPost ? 'article' : 'website'}
        />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />

        {/* twitter card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={seo.twitterUsername} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />
      </Head>

      {/* schema org */}
      <SchemaOrg
        url={seo.url}
        title={seo.title}
        defaultTitle={seo.title}
        {...(props.isBlogPost
          ? {
              isBlogPost: true,
              author,
              canonicalUrl: siteUrl,
              datePublished: props.datePublished,
              description: seo.description,
              image: seo.image,
              organization: seo.organization,
            }
          : {isBlogPost: false})}
      />
    </>
  )
}
