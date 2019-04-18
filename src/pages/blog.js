import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const Posts = styled.ol`
  list-style-type: none;
  margin: 0;
`
const Post = styled.li`
  margin: 1rem 0;
`

const BlogLink = styled(Link)`
  background-color: #f4f4f4;
  color: #000000;
  display: block;
  padding: 1rem;
  text-decoration: none;
  :hover {
    background: #e4e4e4;
  }
`

const Title = styled.h2`
  margin-bottom: 0;
`

const Content = styled.p`
  color: #777777;
  font-size: 0.8rem;
  font-style: italic;
`

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
      <Posts>
        {data.allMarkdownRemark.edges.map(edge => (
          <Post>
            <BlogLink to={`/blog/${edge.node.fields.slug}`}>
              <Title>{edge.node.frontmatter.title}</Title>
              <Content>{edge.node.frontmatter.date}</Content>
            </BlogLink>
          </Post>
        ))}
      </Posts>
    </Layout>
  )
}

export default BlogPage
