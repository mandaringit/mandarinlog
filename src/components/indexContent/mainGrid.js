import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"

const PostsGrid = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1200px;
  @media (min-width: 300px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(4, 15rem);
    grid-gap: 0.3rem;
  }

  /* // 태블릿 디바이스 (가로 해상도가 768px 보다 큰 화면에 적용) */
  @media (min-width: 768px) {
    grid-template-columns: auto auto;
    grid-template-rows: repeat(4, 10rem);
    grid-gap: 0.5rem;
  }
`
const PostGridItem = styled.div`
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  /* border-radius: 0.3rem; */
  @media (min-width: 768px) {
    :first-child {
      grid-row: span 2;
      grid-column: span 2;
    }
    :nth-child(2) {
      grid-row: span 2;
    }
  }
`

const PostLinkBox = styled(Link)`
  background-color: white;
  height: 100%;
  display: block;
  text-decoration: none;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  :hover {
    transform: scale(1.1);
    transition-duration: 1s;
  }
`

const InfoBox = styled.div`
  padding: 1rem;
  height: 100%;
`

const Bagde = styled.div`
  color: ${props => props.theme.mainColor};
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
    background-color: rgba(255, 193, 7, 0.6);
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

const MainGrid = () => {
  const data = useStaticQuery(QUERY)
  const { edges } = data.allMarkdownRemark
  return (
    <PostsGrid>
      {edges.map((edge, index) => {
        const { slug } = edge.node.fields
        const { category, title } = edge.node.frontmatter
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
  )
}

export default MainGrid

const QUERY = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
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
