module.exports = {
  siteMetadata: {
    title: "Andrés Rodríguez",
    author: "Andrés Rodríguez",
    description: "Personal website",
    // TODO: move away from github pages
    siteUrl: "http://andresrodriguez.netlify.com",
    social: {
      twitter: "@andrexish",
    },
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
  ],
}
