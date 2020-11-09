import 'typeface-inter'
import 'styles/index.css'
import type {AppProps} from 'next/app'
import {GlobalStyles} from 'twin.macro'
import {DefaultSeo} from 'next-seo'
import seo from 'config/seo'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyles />
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
