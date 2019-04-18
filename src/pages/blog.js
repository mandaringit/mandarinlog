import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>블로그</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => (
          <li>
            <h2>{edge.node.frontmatter.title}</h2>
            <p>{edge.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
