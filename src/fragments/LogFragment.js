import { graphql } from "gatsby"

export const query = graphql`
  fragment LogMarkdown on MarkdownRemarkConnection {
    totalCount
    edges {
      node {
        frontmatter {
          title
          date(formatString: "YYYY년 MM월 DD일")
          platform
          tags
          subCategory
          category
          featuredImage {
            childImageSharp {
              fixed(width: 500) {
                src
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt(pruneLength: 130, truncate: true)
      }
    }
  }
`
