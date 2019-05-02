import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import {
  Wrapper,
  MainPostWrapper,
  MainTitleBar,
} from "../../styles/mainSharedStyles"
import styled from "styled-components"

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  }
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

const PlatformBadge = styled.h6`
  color: ${props => props.theme.platformColor};
  font-size: 0.7rem;
  font-weight: bold;
  margin: 0 0.2rem 0.2rem 0.2rem;
  padding: 0.2rem 0.3rem;
  align-self: center;
  background-color: ${props => props.theme.platformBackColor};
`

const Title = styled.h5`
  font-weight: bold;
  margin: 0.5rem 0.2rem 0.5rem 0.2rem;
`

const MainLog = () => {
  const data = useStaticQuery(LOG_QUERY)
  const { edges } = data.allMarkdownRemark
  return (
    <Wrapper>
      <MainPostWrapper>
        <MainTitleBar icon="📇" label="write" title="로그" route="/log" />
        <PostsContainer>
          {edges.map(edge => {
            const { slug } = edge.node.fields
            const {
              src,
            } = edge.node.frontmatter.featuredImage.childImageSharp.fixed
            const {
              title,
              platform,
              category,
              subCategory,
            } = edge.node.frontmatter
            const lowerCaseCategory = category.toLowerCase()
            return (
              <LinkContainer key={slug} to={`/${lowerCaseCategory}/${slug}`}>
                <Post>
                  <PlatformBadge platform={platform}>{platform}</PlatformBadge>
                  <FeaturedImage src={src} />
                  <Title>
                    {subCategory ? `[${subCategory}] ` : null}
                    {title}
                  </Title>
                </Post>
              </LinkContainer>
            )
          })}
        </PostsContainer>
      </MainPostWrapper>
    </Wrapper>
  )
}

export default MainLog

const LOG_QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "LOG" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: 2
      limit: 8
    ) {
      ...LogMarkdown
    }
  }
`
