import { graphql } from "gatsby"

export const query = graphql`
  fragment CodeMarkdown on MarkdownRemarkConnection {
    totalCount
    edges {
      node {
        frontmatter {
          title
          date(formatString: "YYYY년 MM월 DD일")
          category
          stacks
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
        excerpt(pruneLength: 130, truncate: true)
      }
    }
  }
`
