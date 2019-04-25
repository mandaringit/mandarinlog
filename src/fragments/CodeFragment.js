import { graphql } from "gatsby"

export const query = graphql`
  fragment CodeMarkdown on MarkdownRemarkConnection {
    totalCount
    edges {
      node {
        frontmatter {
          title
          date(formatString: "YYYY년 MM월 DD일")
          stacks
          featuredImage {
            childImageSharp {
              fixed(width: 900) {
                src
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt(pruneLength: 140)
      }
    }
  }
`
