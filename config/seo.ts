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
        url: `${siteMetadata.siteUrl}/images/og.png`,
        width: 1280,
        height: 675,
        alt: 'Andrés Rodríguez',
      },
    ],
  },
  twitter: {
    handle: '@andrexish',
    site: '@andrexish',
    cardType: 'summary_image_large',
  },
}
