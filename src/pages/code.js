import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import HelmetComponent from "../components/helmetComponent"
import {
  CategoryTitle,
  Title,
  DateContainer,
  Bar,
  InfoBox,
  Posts,
  Post,
  FeaturedImage,
  PostLinkBox,
  Excerpt,
} from "../styles/pageStyles"
import { StackContainer, StackBadge } from "../styles/stackSharedStyles"

const CodePage = () => {
  const data = useStaticQuery(QUERY)
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <Layout>
      <HelmetComponent title="CODE" />
      <CategoryTitle>CODE ({totalCount})</CategoryTitle>
      <Posts>
        {edges.map(edge => {
          const { slug } = edge.node.fields
          const {
            src,
          } = edge.node.frontmatter.featuredImage.childImageSharp.fixed
          const { title, date, stacks } = edge.node.frontmatter
          const { excerpt } = edge.node
          return (
            <Post key={slug}>
              <PostLinkBox to={`/code/${slug}`}>
                <FeaturedImage src={src} />
                <InfoBox>
                  <StackContainer>
                    {stacks.map(stack => (
                      <StackBadge stack={stack}>{stack}</StackBadge>
                    ))}
                  </StackContainer>
                  <Title>{title}</Title>
                  <DateContainer>📝 {date}</DateContainer>
                  <Bar />
                  <Excerpt>{excerpt}</Excerpt>
                </InfoBox>
              </PostLinkBox>
            </Post>
          )
        })}
      </Posts>
    </Layout>
  )
}

export default CodePage

const QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "CODE" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
  }
`
