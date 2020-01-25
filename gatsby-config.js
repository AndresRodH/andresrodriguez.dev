const path = require('path')

/**
 * Prepend dirname to path
 *
 * @param  {string} pathToJoin path to join with __dirname
 */
const here = pathToJoin => path.join(__dirname, pathToJoin)

module.exports = {
  siteMetadata: {
    title: 'Andrés Rodríguez',
    description:
      "Hi! I'm Andrés and I am a software engineer, husband, father and Super Smash Bros. aficionado.",
    author: 'Andrés Rodríguez',
    siteUrl: 'https://andresrodriguez.dev',
    image: 'https://andresrodriguez.dev/andres-rodriguez.jpg',
    social: {
      twitter: '@andrexish',
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
        icon: 'static/logo.png', // This path is relative to the root of the site.
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: here('./src/images'),
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: here('./src/templates/mdx-page.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              wrapperStyle: `
                border-radius: 5px;
                box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
              `,
            },
          },
        ],
      },
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-twitter',
    'gatsby-plugin-emotion',
  ],
}
