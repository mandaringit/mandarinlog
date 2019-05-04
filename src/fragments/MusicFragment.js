import { graphql } from "gatsby"

export const query = graphql`
  fragment MusicMarkdown on MarkdownRemarkConnection {
    totalCount
    edges {
      node {
        frontmatter {
          title
          date(formatString: "YYYY년 MM월 DD일")
          category
          singer
          album
          albumCategory
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
