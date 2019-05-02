const path = require("path")
const createLogPages = require("./pagination/create-log-pages")
const createCodePages = require("./pagination/create-code-pages")
const createMusicPages = require("./pagination/create-music-pages")

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const PostTemplate = path.resolve("./src/templates/PostTemplate.js")

  const res = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    if (edge.node.frontmatter.category === "MUSIC") {
      createPage({
        component: PostTemplate,
        path: `/music/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    } else if (edge.node.frontmatter.category === "LOG") {
      createPage({
        component: PostTemplate,
        path: `/log/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    } else if (edge.node.frontmatter.category === "CODE") {
      createPage({
        component: PostTemplate,
        path: `/code/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    }
  })

  // Pagination
  await createLogPages(graphql, actions)
  await createCodePages(graphql, actions)
  await createMusicPages(graphql, actions)
}

module.exports = createPages
