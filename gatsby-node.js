const path = require("path")

function createTagPages(createPage, posts) {
  const allTagsTemplate = path.resolve("src/templates/AllTagsTemplate.js")
  const singleTagTemplate = path.resolve("src/templates/SingleTagTemplate.js")

  const postsByTag = {}

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }

        postsByTag[tag].push(node)
      })
    }
  })

  const tags = Object.keys(postsByTag)

  createPage({
    path: "/blog/tags",
    component: allTagsTemplate,
    context: {
      tags: tags.sort(),
    },
  })

  tags.forEach(tagName => {
    const posts = postsByTag[tagName]

    createPage({
      path: `/blog/tags/${tagName}`,
      component: singleTagTemplate,
      context: {
        posts,
        tagName,
      },
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/BlogPostTemplate.js")

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
                  tags
                }
              }
            }
          }
        }
      `).then(result => {
        const { edges: posts } = result.data.allMarkdownRemark

        createTagPages(createPage, posts)

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
