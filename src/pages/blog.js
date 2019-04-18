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
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            # contentful의 모델에 따라 다르다.
            title
            slug
            publishedDate(formatString: "MM월 DD일, YYYY")
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>블로그</h1>
      <Posts>
        {data.allContentfulBlogPost.edges.map(edge => (
          <Post>
            <BlogLink to={`/blog/${edge.node.slug}`}>
              <Title>{edge.node.title}</Title>
              <Content>{edge.node.publishedDate}</Content>
            </BlogLink>
          </Post>
        ))}
      </Posts>
    </Layout>
  )
}

export default BlogPage
