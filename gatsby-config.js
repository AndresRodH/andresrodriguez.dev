const path = require('path')

/**
 * Prepend dirname to path
 *
 * @param  {string} pathToJoin path to join with __dirname
 */

const here = (pathToJoin) => path.join(__dirname, pathToJoin)

const siteUrl = 'https://andresrodriguez.dev'

module.exports = {
  siteMetadata: {
    siteUrl,
    title: 'Andrés Rodríguez',
    description:
      'Andrés Rodríguez is a software engineer currently living in St. Louis',
    author: 'Andrés Rodríguez',
    image: 'images/andres-rodriguez.jpg',
    organization: {
      name: 'Andrés Rodríguez',
      url: siteUrl,
      logo: {
        url: 'images/logo.png',
        width: 512,
        height: 512,
      },
    },
    social: {
      twitter: '@andrexish',
      gitHub: 'andresrodh',
      linkedin: 'andresrodh',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Andrés Rodríguez',
        short_name: 'Andrés Rodríguez',
        start_url: '/',
        background_color: '#1ca086',
        theme_color: '#1ca086',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'static/images/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: here('./content/posts'),
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: here('./src/templates/mdx-page.tsx'),
        },
        gatsbyRemarkPlugins: ['gatsby-remark-images'],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-twitter',
    'gatsby-plugin-postcss',
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-eslint',
    'gatsby-plugin-layout',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-typegen`,
      options: {
        emitSchema: {
          'src/__generated__/gatsby-introspection.json': true,
          'src/__generated__/gatsby-schema.graphql': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-177957629-1',
      },
    },
  ],
}
