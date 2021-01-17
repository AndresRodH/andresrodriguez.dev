/* eslint-disable react/display-name */
import 'fontsource-inter'
import 'fontsource-inter/500.css'
import 'fontsource-inter/600.css'
import 'fontsource-inter/700.css'
import 'fontsource-inter/800.css'
import 'fontsource-inter/900.css'
import 'fontsource-jetbrains-mono'
import 'styles/index.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'
import {DefaultSeo} from 'next-seo'
import {seo} from 'config'
import {ReactQueryDevtools} from 'react-query-devtools'
import {QueryCache, ReactQueryCacheProvider} from 'react-query'
import {Components, MDXProvider} from '@mdx-js/react'
import {CodeBlock} from 'components/code-block'

const queryCache = new QueryCache()

const components: Components = {
  pre: (props) => <div {...props} />,
  code: CodeBlock,
}

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultSeo {...seo} />
      <ReactQueryCacheProvider queryCache={queryCache}>
        <ReactQueryDevtools initialIsOpen />
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </ReactQueryCacheProvider>
    </>
  )
}

export default MyApp
