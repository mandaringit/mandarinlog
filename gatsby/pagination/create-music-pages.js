const path = require("path")

module.exports = async (graphql, actions) => {
  const { createPage } = actions
  const postsPerPage = 18
  const musicPage = path.resolve("./src/templates/paginationTemplate/music.js")

  const res = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "MUSIC" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        totalCount
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

  const { totalCount } = res.data.allMarkdownRemark
  const numPages = Math.ceil(totalCount / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/music/` : `/music/page/${i + 1}`,
      component: musicPage,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
