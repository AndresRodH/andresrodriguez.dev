import 'typeface-inter'
import 'styles/index.css'
import type {AppProps} from 'next/app'
import {GlobalStyles} from 'twin.macro'
import {DefaultSeo} from 'next-seo'
import {seo} from 'config'
import {ReactQueryDevtools} from 'react-query-devtools'
import {QueryCache, ReactQueryCacheProvider} from 'react-query'

const queryCache = new QueryCache()

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyles />
      <DefaultSeo {...seo} />
      <ReactQueryCacheProvider queryCache={queryCache}>
        <ReactQueryDevtools initialIsOpen />
        <Component {...pageProps} />
      </ReactQueryCacheProvider>
    </>
  )
}

export default MyApp
