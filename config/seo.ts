import type {DefaultSeoProps} from 'next-seo'

const title = 'Andrés Rodríguez'
const description = `I'm a developer, husband and father. I work at Coolfire Solutions as a Software Engineer building Core.`
const siteUrl = 'https://andresrodriguez.dev'

const seo: DefaultSeoProps = {
  title,
  titleTemplate: '%s | Andrés Rodríguez',
  description,
  openGraph: {
    locale: 'en_US',
    type: 'website',
    url: siteUrl,
    title,
    description,
    images: [
      {
        url: `${siteUrl}/images/andres-rodriguez.jpg`,
        width: 660,
        height: 660,
        alt: 'Andrés Rodríguez',
      },
    ],
  },
  twitter: {
    handle: '@andrexish',
    cardType: 'summary_large_image',
  },
}

export default seo
