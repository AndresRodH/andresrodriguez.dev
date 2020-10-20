import React from 'react'
import Head from 'next/head'
import config from 'config'
import {useRouter} from 'next/router'
import {SchemaOrg} from './schema-org'

type Props = Partial<{
  lang: string
  title: string
  description: string
  isBlogPost: boolean
  image: string
  datePublished: string
}>

export function SEO({
  lang = 'en',
  title,
  description,
  isBlogPost = false,
  image,
  datePublished,
}: Props) {
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
        <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
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
        description={seo.description}
        image={seo.image}
        defaultTitle={seo.title}
        canonicalUrl={siteUrl}
        datePublished={datePublished}
        author={seo.author}
        organization={seo.organization}
        isBlogPost={isBlogPost}
        url={seo.url}
        title={seo.title}
      />
    </>
  )
}
