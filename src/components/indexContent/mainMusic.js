import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import {
  Wrapper,
  MainPostWrapper,
  MainTitle,
  MainTitleLink,
  Posts,
  Post,
  PostLinkBox,
  InfoBox,
  Title,
  FeaturedImage,
} from "../../styles/mainSharedStyles"

const ExtendMainTitleLink = styled(MainTitleLink)`
  background-color: ${props => props.theme.grayColor};
`

const AlbumCategoryBadge = styled.div`
  font-size: 0.7rem;
  padding: 0 0.4rem;
  margin: 0.5rem 0 0 0.5rem;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${props => {
    if (props.category === "싱글") {
      return "#f3a683"
    } else if (props.category === "EP") {
      return "#574b90"
    } else if (props.category === "정규") {
      return "#f5cd79"
    }
  }};
`

const Singer = styled.span`
  text-align: center;
  font-size: 1rem;
  color: ${props => props.theme.barColor};
  padding: 0.5rem;
`

const MainMusic = () => {
  const data = useStaticQuery(MUSIC_QUERY)
  const { edges } = data.allMarkdownRemark
  return (
    <Wrapper color={"black"}>
      <MainPostWrapper>
        <MainTitle>
          <ExtendMainTitleLink to={"/music"}>
            <span role="img" aria-label="music">
              🎧
            </span>{" "}
            해외음악
          </ExtendMainTitleLink>
        </MainTitle>
        <Posts>
          {edges.map(edge => {
            const { slug } = edge.node.fields
            const {
              src,
            } = edge.node.frontmatter.featuredImage.childImageSharp.fixed
            const { singer, album, albumCategory } = edge.node.frontmatter
            return (
              <Post key={slug}>
                <PostLinkBox to={`/music/${slug}`}>
                  <FeaturedImage src={src}>
                    <InfoBox>
                      <Title>{album}</Title>
                      <Singer>{singer}</Singer>
                    </InfoBox>
                  </FeaturedImage>
                </PostLinkBox>
              </Post>
            )
          })}
        </Posts>
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
      limit: 8
    ) {
      ...MusicMarkdown
    }
  }
`
