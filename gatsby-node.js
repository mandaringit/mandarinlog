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
  const opinionTemplate = path.resolve("./src/templates/opinionTemplate.js")
  const musicTemplate = path.resolve("./src/templates/musicTemplate.js")
  const movieTemplate = path.resolve("./src/templates/movieTemplate.js")
  const gameTemplate = path.resolve("./src/templates/gameTemplate.js")
  const codeTemplate = path.resolve("./src/templates/codeTemplate.js")

  const res = await graphql(`
    query {
      allMarkdownRemark {
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
        path: `/review/${edge.node.fields.slug}`,
        context: {
          slug: edge.node.fields.slug,
        },
      })
    } else if (edge.node.frontmatter.category === "GAME") {
      createPage({
        component: gameTemplate,
        path: `/review/${edge.node.fields.slug}`,
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
}
