import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import HelmetComponent from "../components/helmetComponent"

const Posts = styled.ol`
  list-style-type: none;
  margin: 0;
`
const Post = styled.li`
  margin: 1rem 0;
`

const OpinionLink = styled(Link)`
  background-color: white;
  color: #000000;
  display: block;
  padding: 1rem;
  text-decoration: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  :hover {
    background: ${props => props.theme.hoverColor};
  }
`

const Title = styled.h3`
  margin-bottom: 0.5rem;
`

const DateContainer = styled.div`
  color: ${props => props.theme.thinMainColor};
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
`

const Content = styled.p`
  color: black;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`

const Bar = styled.div`
  border-bottom: 1px solid ${props => props.theme.barColor};
`

const OpinionPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "OPINION" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "YYYY년 MM월 DD일")
            }
            fields {
              slug
            }
            excerpt(pruneLength: 200)
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <HelmetComponent title="오피니언" />
      <h1>오피니언 ({data.allMarkdownRemark.edges.length})</h1>
      <Posts>
        {data.allMarkdownRemark.edges.map(edge => (
          <Post key={edge.node.fields.slug}>
            <OpinionLink to={`/opinion/${edge.node.fields.slug}`}>
              <Title>{edge.node.frontmatter.title}</Title>
              <DateContainer>🗒 {edge.node.frontmatter.date}</DateContainer>
              <Bar />
              <Content>{edge.node.excerpt}</Content>
            </OpinionLink>
          </Post>
        ))}
      </Posts>
    </Layout>
  )
}

export default OpinionPage
