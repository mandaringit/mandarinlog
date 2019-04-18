const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blogTemplate.js")
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate, // 연결할 템플릿
      path: `/blog/${edge.node.slug}`, // 생성할 페이지 경로
      context: {
        slug: edge.node.slug, // 템플릿에 전달할 것들?
      },
    })
  })
}
