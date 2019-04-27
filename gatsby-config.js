module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
