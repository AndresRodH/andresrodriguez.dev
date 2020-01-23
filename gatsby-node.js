const path = require('path')
const slugify = require('@sindresorhus/slugify')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // node.internal.type is the GraphQL type
  if (node.internal.type === 'Mdx') {
    // get slug from mdx frontmatter if available or generate one from the file path
    let slug =
      node.frontmatter.slug ||
      createFilePath({ node, getNode, basePath: 'pages' })

    // mount blog posts on /blog/:slug
    if (node.fileAbsolutePath.includes('content/posts/')) {
      slug = `/blog/${node.frontmatter.slug || slugify(parent.name)}`
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query for all posts
  const posts = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (posts.errors) {
    console.error('🚨  ERROR: Loading "createPages" query:', posts.errors)
  }
  // create pages for each post
  posts.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
