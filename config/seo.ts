import siteMetadata from './siteMetadata'

export default {
  title: siteMetadata.title,
  description: siteMetadata.shortBio,
  openGraph: {
    locale: 'en_US',
    type: 'website',
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.shortBio,
    images: [
      {
        url: `${siteMetadata.siteUrl}/images/andres-rodriguez.jpg`,
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
