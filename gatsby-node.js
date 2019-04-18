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
