module.exports = {
  client: {
    name: 'andresrodriguez.dev',
    tagName: 'graphql',
    includes: [
      './src/**/*.{ts,tsx}',
      './src/__generated__/gatsby-plugin-documents.graphql',
    ],
    service: {
      name: 'GatsbyJS',
      endpoint: 'http://localhost:8000/___graphql',
      localSchemaFile: './src/__generated__/gatsby-schema.graphql',
    },
  },
}
