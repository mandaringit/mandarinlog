import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import HelmetComponent from "../components/helmetComponent"
import { CategoryTitle, Posts, Post } from "../styles/pageStyles"

const ExtendPosts = styled(Posts)`
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: minmax(10rem, 13rem);
`

const PostLinkBox = styled(Link)`
  background-color: white;
  border-radius: 3px;
  color: #000000;
  display: flex;
  text-decoration: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  height: 100%;
  padding: 1rem 0 1rem 1rem;
`

const FeaturedImage = styled.img`
  border-radius: 3px;
  margin: 0;
  width: 50%;
  height: 100%;
  min-height: 10rem;
  object-fit: cover;
`

const InfoBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`

const Title = styled.h3`
  margin-bottom: 0.5rem;
  text-align: center;
`

const Singer = styled.h5``

const TranslationBadge = styled.div`
  font-size: 0.7rem;
  padding: 0 0.4rem;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${props => (props.translation ? "#4CAF50" : "red")};
`

const MusicPage = () => {
  const data = useStaticQuery(QUERY)
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <Layout>
      <HelmetComponent title="MUSIC" />
      <CategoryTitle>MUSIC ({totalCount})</CategoryTitle>
      <ExtendPosts>
        {edges.map(edge => {
          const { slug } = edge.node.fields
          const {
            src,
          } = edge.node.frontmatter.featuredImage.childImageSharp.fixed
          const { title, singer, translation } = edge.node.frontmatter
          return (
            <Post key={slug}>
              <PostLinkBox to={`/music/${slug}`}>
                <FeaturedImage src={src} />
                <InfoBox>
                  <Title>{title}</Title>
                  <Singer>{singer}</Singer>
                  {translation ? (
                    <TranslationBadge translation={translation}>
                      가사 번역
                    </TranslationBadge>
                  ) : null}
                </InfoBox>
              </PostLinkBox>
            </Post>
          )
        })}
      </ExtendPosts>
    </Layout>
  )
}

export default MusicPage

const QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "MUSIC" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
