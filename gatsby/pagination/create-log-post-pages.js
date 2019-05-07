const path = require("path")

module.exports = async (graphql, actions) => {
  const { createPage } = actions
  const PostTemplate = path.resolve("./src/templates/PostTemplate.js")

  const res = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "LOG" } } }
        sort: { fields: [frontmatter___date], order: ASC }
      ) {
        edges {
          next {
            frontmatter {
              title
              featuredImage {
                childImageSharp {
                  fixed(width: 400) {
                    src
                  }
                }
              }
            }
            fields {
              slug
            }
          }
          previous {
            frontmatter {
              title
              featuredImage {
                childImageSharp {
                  fixed(width: 400) {
                    src
                  }
                }
              }
            }
            fields {
              slug
            }
          }
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
      component: PostTemplate,
      path: `/log/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
        next: {
          path: edge.next ? `/log/${edge.next.fields.slug}` : null,
          title: edge.next ? edge.next.frontmatter.title : null,
          imageSrc: edge.next
            ? edge.next.frontmatter.featuredImage.childImageSharp.fixed.src
            : null,
        },
        prev: {
          path: edge.previous ? `/log/${edge.previous.fields.slug}` : null,
          title: edge.previous ? edge.previous.frontmatter.title : null,
          imageSrc: edge.previous
            ? edge.previous.frontmatter.featuredImage.childImageSharp.fixed.src
            : null,
        },
      },
    })
  })
}
