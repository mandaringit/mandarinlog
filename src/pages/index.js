import React from "react"
import Layout from "../components/layout"
import { CategoryTitle } from "../styles/pageStyles"
import { graphql, useStaticQuery, Link } from "gatsby"
import MainGrid from "../components/indexContent/mainGrid"
import SEO from "../components/SEO"

const IndexPage = () => {
  const data = useStaticQuery(QUERY)
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO
        title="홈"
        description="만다린로그 홈페이지"
        pathname="/"
        keywords={["홈,만다린로그"]}
      />
      <MainGrid />
    </Layout>
  )
}

export default IndexPage

const QUERY = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 7
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY년 MM월 DD일")
            category
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
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`
