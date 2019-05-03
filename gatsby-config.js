module.exports = {
  siteMetadata: {
    title: "Andrés Rodríguez",
    author: "Andrés Rodríguez",
    description: "Personal website",
    // TODO: move away from github pages
    siteUrl: "http://andresrodh.github.io",
    social: {
      twitter: "@andrexish",
    },
  },
  plugins: [
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
