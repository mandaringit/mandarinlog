import React from "react"
import Layout from "../components/layout"
import HelmetComponent from "../components/helmetComponent"
import { CategoryTitle } from "../styles/pageStyles"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

const PostsGrid = styled.div`
  display: -ms-grid;
  display: grid;
  margin: 0;

  @media (min-width: 300px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(7, 20rem);
    grid-gap: 0.3rem;
  }

  /* // 태블릿 디바이스 (가로 해상도가 768px 보다 큰 화면에 적용) */
  @media (min-width: 768px) {
    grid-template-columns: auto auto;
    grid-template-rows: repeat(6, 13rem);
    grid-gap: 1rem;
  }
`
const PostGridItem = styled.div`
  overflow: hidden;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
  @media (min-width: 768px) {
    :first-child {
      -ms-grid-row-span: 2;
      grid-row: span 2;
      -ms-grid-column-span: 2;
      grid-column: span 2;
    }
    :nth-child(2) {
      -ms-grid-row-span: 2;
      grid-row: span 2;
    }
    :nth-child(6) {
      -ms-grid-row-span: 2;
      grid-row: span 2;
    }
  }
`

const PostLinkBox = styled(Link)`
  background-color: white;
  height: 100%;
  display: block;
  text-decoration: none;
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(255, 255, 255, 0.3)),
      to(rgba(255, 255, 255, 0.3))
    ),
    url(${props => props.imageUrl});
  background-image: -webkit-linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${props => props.imageUrl});
  background-image: -o-linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${props => props.imageUrl});
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition-duration: 1s;
    -o-transition-duration: 1s;
    transition-duration: 1s;
  }
`

const InfoBox = styled.div`
  padding: 1rem;
  height: 100%;
`

const Bagde = styled.div`
  color: #ffc107;
  background-color: black;
  display: inline;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0 0.3rem;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  .title_1 {
    color: #000000;
    padding: 1rem;
    background-color: rgba(92, 107, 192, 0.8);
    margin: 1rem 0 0 0;
    @media (min-width: 300px) {
      font-size: 2rem;
    }
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
  .title_2,
  .title_3,
  .title_4,
  .title_5,
  .title_6,
  .title_7 {
    color: #000000;
    padding: 1rem;
    font-size: 2rem;
    margin: 0;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(QUERY)
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <HelmetComponent title="홈" />
      <CategoryTitle>🔥 LATEST</CategoryTitle>
      <PostsGrid>
        {edges.map((edge, index) => {
          const { slug } = edge.node.fields
          const { category, title, date } = edge.node.frontmatter
          const lowerCaseCategory = category.toLowerCase()
          const {
            src,
          } = edge.node.frontmatter.featuredImage.childImageSharp.fixed
          return (
            <PostGridItem key={slug}>
              <PostLinkBox to={`/${lowerCaseCategory}/${slug}`} imageUrl={src}>
                <InfoBox>
                  <TitleContainer>
                    <Bagde>{category}</Bagde>
                    <h1 className={`title_${index + 1}`}>{title}</h1>
                  </TitleContainer>
                </InfoBox>
              </PostLinkBox>
            </PostGridItem>
          )
        })}
      </PostsGrid>
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
