import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"

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
            fields {
              slug
            }
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
            <h2>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </h2>
            <p>{edge.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
