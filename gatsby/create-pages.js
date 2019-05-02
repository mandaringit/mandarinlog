const path = require("path")
const createReviewPages = require("./pagination/create-review-pages")
const createOpinionPages = require("./pagination/create-opinion-pages")
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
    if (edge.node.frontmatter.category === "OPINION") {
      createPage({
        component: PostTemplate,
        path: `/opinion/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    } else if (edge.node.frontmatter.category === "MUSIC") {
      createPage({
        component: PostTemplate,
        path: `/music/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    } else if (edge.node.frontmatter.category === "REVIEW") {
      createPage({
        component: PostTemplate,
        path: `/review/${edge.node.fields.slug}`,
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
  await createReviewPages(graphql, actions)
  await createOpinionPages(graphql, actions)
  await createCodePages(graphql, actions)
  await createMusicPages(graphql, actions)
}

module.exports = createPages
