const path = require("path")
const createReviewPages = require("./pagination/create-review-pages")
const createOpinionPages = require("./pagination/create-opinion-pages")
const createCodePages = require("./pagination/create-code-pages")
const createMusicPages = require("./pagination/create-music-pages")

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const opinionTemplate = path.resolve("./src/templates/opinionTemplate.js")
  const musicTemplate = path.resolve("./src/templates/musicTemplate.js")
  const movieTemplate = path.resolve("./src/templates/movieTemplate.js")
  const gameTemplate = path.resolve("./src/templates/gameTemplate.js")
  const codeTemplate = path.resolve("./src/templates/codeTemplate.js")

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
        component: opinionTemplate,
        path: `/opinion/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    } else if (edge.node.frontmatter.category === "MUSIC") {
      createPage({
        component: musicTemplate,
        path: `/music/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    } else if (edge.node.frontmatter.category === "MOVIE") {
      createPage({
        component: movieTemplate,
        path: `/movie/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    } else if (edge.node.frontmatter.category === "GAME") {
      createPage({
        component: gameTemplate,
        path: `/game/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    } else if (edge.node.frontmatter.category === "CODE") {
      createPage({
        component: codeTemplate,
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