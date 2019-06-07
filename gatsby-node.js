const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/BlogPostTemplate.tsx")

    resolve(
      graphql(`
        query {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                frontmatter {
                  path
                  title
                }
              }
            }
          }
        }
      `).then(result => {
        const { edges: posts } = result.data.allMarkdownRemark

        posts.forEach(({ node }, index) => {
          const { path } = node.frontmatter

          createPage({
            path: "/blog".concat(path),
            component: blogPostTemplate,
            context: {
              slug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          })

          resolve()
        })
      })
    )
  })
}
