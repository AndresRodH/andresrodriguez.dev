import type {DefaultSeoProps} from 'next-seo'

const title = 'Andrés Rodríguez | Software Engineer'
const description = `I'm a developer, husband and father. I work at Coolfire Solutions as a Software Engineer building Core.`
const siteUrl = 'https://andresrodriguez.dev'

const seo: DefaultSeoProps = {
  title,
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
    site: '@andrexish',
    cardType: 'summary',
  },
}

export default seo
