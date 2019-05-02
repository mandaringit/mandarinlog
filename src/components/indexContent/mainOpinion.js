import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import {
  Wrapper,
  MainPostWrapper,
  MainTitleBar,
} from "../../styles/mainSharedStyles"

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

const Title = styled.h5`
  font-weight: bold;
  margin: 0.2rem 0.2rem 0.5rem 0.2rem;
`

const MainOpinion = () => {
  const data = useStaticQuery(OPINION_QUERY)
  const { edges } = data.allMarkdownRemark
  return (
    <Wrapper color={"white"}>
      <MainPostWrapper>
        <MainTitleBar icon="🖋" label="pen" title="오피니언" route="/opinion" />
        <PostsContainer>
          {edges.map(edge => {
            const { slug } = edge.node.fields
            const {
              src,
            } = edge.node.frontmatter.featuredImage.childImageSharp.fixed
            const { title } = edge.node.frontmatter
            return (
              <Post key={slug}>
                <LinkContainer to={`/opinion/${slug}`}>
                  <FeaturedImage src={src} />
                  <Title>{title}</Title>
                </LinkContainer>
              </Post>
            )
          })}
        </PostsContainer>
      </MainPostWrapper>
    </Wrapper>
  )
}

export default MainOpinion

const OPINION_QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "OPINION" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: 1
      limit: 8
    ) {
      ...OpinionMarkdown
    }
  }
`
