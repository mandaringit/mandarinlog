const path = require("path")
const config = require("./config")

module.exports = async (graphql, actions) => {
  const { createPage } = actions
  const { postsPerPage } = config
  const logPage = path.resolve("./src/templates/paginationTemplate/log.js")

  const res = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "LOG" } } }
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
      path: i === 0 ? `/log/` : `/log/page/${i + 1}`,
      component: logPage,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
