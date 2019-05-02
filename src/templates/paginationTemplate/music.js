import React from "react"
import PageLayout from "../../components/Layout/pageLayout"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { CategoryTitle, PageWrapper } from "../../styles/pageStyles"
import SEO from "../../components/SEO"
import PageLink from "../../components/pageLink"

const Posts = styled.div`
  margin: 0;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  grid-auto-rows: minmax(13rem, 1fr);
`

const Post = styled.article`
  width: 100%;
  border-radius: 3px;
`

const PostLinkBox = styled(Link)`
  border-radius: 3px;
  color: black;
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
  min-height: 9rem;
  border: 1px solid ${props => props.theme.postBorderColor};
  display: flex;
  justify-content: start;
  align-items: start;
  margin-bottom: 0.3rem;
`

const AlbumCategoryBadge = styled.h6`
  font-size: 0.6rem;
  padding: 0.3rem 0.3rem;
  margin: 0;
  font-weight: bold;
  background-color: ${props => props.theme.albumCategoryColor};
  color: white;
`

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
`

const Title = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #010101;
`

const Singer = styled.div`
  font-size: 0.8rem;
  color: #aaaaaa;
`

const MusicPage = props => {
  const { data, pageContext } = props
  const { edges } = data.allMarkdownRemark
  return (
    <PageLayout>
      <SEO
        title="해외음악"
        description="해외음악 페이지 리스트"
        pathname="/music"
        keywords={["해외음악,POP,가사,만다린로그"]}
      />
      <PageWrapper>
        <CategoryTitle>
          <span role="img" aria-label="pen">
            🎧
          </span>{" "}
          해외음악
        </CategoryTitle>
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
        <PageLink
          route={"music"}
          numPages={pageContext.numPages}
          currentPage={pageContext.currentPage}
        />
      </PageWrapper>
    </PageLayout>
  )
}

export default MusicPage

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "MUSIC" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      ...MusicMarkdown
    }
  }
`
