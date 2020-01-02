/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Andrés Rodríguez',
    description:
      'Andrés Rodríguez is a web developer, husband, father and Super Smash Bros. aficionado.',
    author: 'Andrés Rodríguez',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'GatsbyJS',
        short_name: 'GatsbyJS',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              wrapperStyle: `
                border-radius: 5px;
                box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
              `,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: 'content',
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
