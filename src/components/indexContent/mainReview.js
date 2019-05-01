import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import {
  Wrapper,
  MainPostWrapper,
  MainTitle,
  MainTitleLink,
} from "../../styles/mainSharedStyles"
import styled from "styled-components"

const PostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 1rem;
`

const LinkContainer = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
`

const Post = styled.article`
  background-color: none;
  display: flex;
  flex-direction: column;
`

const FeaturedImage = styled.img`
  margin: 0;
  object-fit: cover;
  width: 100%;
  height: 7rem;
`

const PlatformBadge = styled.div`
  color: ${props => {
    if (props.platform === "Netflix") {
      return "#e52811"
    } else if (props.platform === "영화관") {
      return "#6c5ce7"
    } else {
      return "gray"
    }
  }};
  font-size: 0.7rem;
  font-weight: bold;
  text-align: center;
  margin: 0.2rem;
`

const Title = styled.h5`
  font-weight: bold;
  margin: 0.3rem 0.3rem 0.5rem 0.3rem;
`

const MainReview = () => {
  const data = useStaticQuery(REVIEW_QUERY)
  const { edges } = data.allMarkdownRemark
  return (
    <Wrapper>
      <MainPostWrapper>
        <MainTitle>
          <MainTitleLink to={"/review"}>
            <span role="img" aria-label="eye">
              👀
            </span>{" "}
            리뷰
          </MainTitleLink>
        </MainTitle>
        <PostContainer>
          {edges.map(edge => {
            const { slug } = edge.node.fields
            const {
              src,
            } = edge.node.frontmatter.featuredImage.childImageSharp.fixed
            const { title, platform, category } = edge.node.frontmatter
            const lowerCaseCategory = category.toLowerCase()
            return (
              <LinkContainer to={`/${lowerCaseCategory}/${slug}`}>
                <Post key={slug}>
                  <PlatformBadge platform={platform}>{platform}</PlatformBadge>
                  <FeaturedImage src={src} />
                  <Title>{title}</Title>
                </Post>
              </LinkContainer>
            )
          })}
        </PostContainer>
      </MainPostWrapper>
    </Wrapper>
  )
}

export default MainReview

const REVIEW_QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { in: ["MOVIE", "GAME"] } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: 1
      limit: 8
    ) {
      ...ReviewMarkdown
    }
  }
`
