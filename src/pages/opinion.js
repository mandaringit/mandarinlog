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
} from "../styles/pageStyles"

const Posts = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: minmax(20rem, 21rem);
  grid-gap: 0.5rem;
`
const Post = styled.article`
  width: 100%;
`
const PostLinkBox = styled(Link)`
  background-color: white;
  border-radius: 3px;
  color: #000000;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  height: 100%;
`

const FeaturedImage = styled.img`
  border-radius: 3px 3px 0 0;
  margin: 0;
  width: 100%;
  min-height: 8rem;
  height: 100%;
  object-fit: cover;
  :hover {
    opacity: 0.6;
    transition-duration: 1s;
  }
`

const Excerpt = styled.p`
  color: black;
  font-size: 0.8rem;
  margin: 0.5rem 0;
`

const OpinionPage = () => {
  const data = useStaticQuery(QUERY)
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <Layout>
      <HelmetComponent title="OPINION" />
      <CategoryTitle>OPINION ({totalCount})</CategoryTitle>
      {/* <div>카테고리 리스트 간단하게 추가</div> */}
      <Posts>
        {edges.map(edge => {
          const { slug } = edge.node.fields
          const {
            src,
          } = edge.node.frontmatter.featuredImage.childImageSharp.fixed

          const { title, date } = edge.node.frontmatter
          const { excerpt } = edge.node
          return (
            <Post key={slug}>
              <PostLinkBox to={`/opinion/${slug}`}>
                <FeaturedImage src={src} />
                <InfoBox>
                  <Title>{title}</Title>
                  <DateContainer>🗒 {date}</DateContainer>
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

export default OpinionPage

const QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "OPINION" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY년 MM월 DD일")
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
