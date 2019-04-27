import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import {
  Wrapper,
  MainPostWrapper,
  MainTitle,
  MainTitleLink,
} from "../../styles/mainSharedStyles"

const ExtendMainTitleLink = styled(MainTitleLink)`
  background-color: ${props => props.theme.grayColor};
`

const Posts = styled.div`
  margin: 0;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  grid-auto-rows: minmax(13rem, 1fr);
`

const Post = styled.article`
  width: 100%;
  background-color: none;
  border-radius: 3px;
`

const PostLinkBox = styled(Link)`
  border-radius: 3px;
  color: #000000;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

const FeaturedImage = styled.div`
  background-color: white; /* fallback */
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  min-height: 13rem;
  /* border: 1px solid ${props => props.theme.postBorderColor}; */
  display: flex;
  justify-content: start;
  align-items: start;
  margin-bottom: 0.3rem;
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

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
`

const Title = styled.span`
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: white;
`

const Singer = styled.span`
  text-align: center;
  font-size: 0.8rem;
  color: #aaaaaa;
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
                    <AlbumCategoryBadge category={albumCategory}>
                      {albumCategory}
                    </AlbumCategoryBadge>
                  </FeaturedImage>
                  <InfoBox>
                    <Title>{album}</Title>
                    <Singer>{singer}</Singer>
                  </InfoBox>
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
