const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  // console.log(JSON.stringify(node, undefined, 4)) // => 여기서 internal을 참고한다
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    // 예를 들어 "/home/mandarin/workspace/Personal/Gatsby/gatsby-bootcamp/src/posts/gatsby.md"
    // 라는 경로라면, basename()으로 gatsby.md만 얻고, 또 거기서 .md를 없애고 나머지 이름인
    // gatsby만 구한다.
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blogTemplate.js")
  const res = await graphql(`
    query {
      allMarkdownRemark {
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

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate, // 연결할 템플릿
      path: `/blog/${edge.node.fields.slug}`, // 생성할 페이지 경로
      context: {
        slug: edge.node.fields.slug, // 템플릿에 전달할 것들?
      },
    })
  })
}
