const path = require("path")
const config = require("./config")

module.exports = async (graphql, actions) => {
  const { createPage } = actions
  const { postsPerPage } = config
  const opinionPage = path.resolve(
    "./src/templates/paginationTemplate/opinion.js"
  )

  const res = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "OPINION" } } }
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
      path: i === 0 ? `/opinion/` : `/opinion/page/${i + 1}`,
      component: opinionPage,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
