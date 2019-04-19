import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import HelmetComponent from "../components/helmetComponent"
import {
  Title,
  FeaturedImage,
  DateContainer,
  Excerpt,
  Bar,
  PostLinkBox,
  InfoBox,
} from "../styles/pageStyles"

const Posts = styled.ol`
  list-style-type: none;
  margin: 0;
`
const Post = styled.li`
  margin: 1rem 0;
`

const Singer = styled.div`
  font-weight: bold;
  font-size: 0.7rem;
`

const MusicPage = () => {
  const data = useStaticQuery(QUERY)
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <Layout>
      <HelmetComponent title="POP" />
      <h1>POP ({totalCount})</h1>
      <Posts>
        {edges.map(edge => {
          const { slug } = edge.node.fields
          const {
            src,
          } = edge.node.frontmatter.featuredImage.childImageSharp.fixed
          const { title, singer, date, translation } = edge.node.frontmatter
          const { excerpt } = edge.node
          return (
            <Post key={slug}>
              <PostLinkBox to={`/music/${slug}`}>
                <FeaturedImage src={src} />
                <InfoBox>
                  <Title>{title}</Title>
                  <Singer>🎤 {singer}</Singer>
                  <DateContainer>🗒 {date}</DateContainer>
                  {translation ? <p>"번역 완료"</p> : <p>"미번역"</p>}
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

export default MusicPage

const QUERY = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "MUSIC" } } }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY년 MM월 DD일")
            singer
            translation
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
