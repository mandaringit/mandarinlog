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
  min-height: 13rem;
`

const FeaturedImage = styled.div`
  background-color: white; /* fallback */
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, #000 100%),
    url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  display: flex;
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: start;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
`
const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
`

const Singer = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.barColor};
`

const MainMusic = () => {
  const data = useStaticQuery(MUSIC_QUERY)
  const { edges } = data.allMarkdownRemark
  return (
    <Wrapper color={"black"}>
      <MainPostWrapper>
        <MainTitleBar icon="🎧" label="music" title="해외음악" route="/music" />
        <PostsContainer>
          {edges.map(edge => {
            const { slug } = edge.node.fields
            const {
              src,
            } = edge.node.frontmatter.featuredImage.childImageSharp.fixed
            const { singer, album } = edge.node.frontmatter
            return (
              <LinkContainer to={`/music/${slug}`}>
                <Post key={slug}>
                  <FeaturedImage src={src}>
                    <InfoBox>
                      <Title>{album}</Title>
                      <Singer>{singer}</Singer>
                    </InfoBox>
                  </FeaturedImage>
                </Post>
              </LinkContainer>
            )
          })}
        </PostsContainer>
      </MainPostWrapper>
    </Wrapper>
  )
}

export default MainMusic

const MUSIC_QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "MUSIC" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: 1
      limit: 10
    ) {
      ...MusicMarkdown
    }
  }
`
