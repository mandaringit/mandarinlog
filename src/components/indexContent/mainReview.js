import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import {
  Title,
  Posts,
  Post,
  InfoBox,
  FeaturedImage,
} from "../../styles/pageStyles"
import { PlatformBadge, TagContainer, Tag } from "../../styles/tagsSharedStyles"
import {
  Wrapper,
  MainPostWrapper,
  MainTitle,
  MainTitleLink,
} from "../../styles/mainSharedStyles"

const PostLinkBox = styled(Link)`
  color: black;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

const ExtendFeaturedImage = styled(FeaturedImage)`
  min-height: 15rem;
`

const ExtendInfoBox = styled(InfoBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        <Posts>
          {edges.map(edge => {
            const { slug } = edge.node.fields
            const {
              src,
            } = edge.node.frontmatter.featuredImage.childImageSharp.fixed
            const { title, platform, tags, category } = edge.node.frontmatter
            const lowerCaseCategory = category.toLowerCase()
            return (
              <Post key={slug}>
                <PostLinkBox to={`/${lowerCaseCategory}/${slug}`}>
                  <ExtendFeaturedImage src={src}>
                    <PlatformBadge platform={platform}>
                      {platform}
                    </PlatformBadge>
                  </ExtendFeaturedImage>
                  <ExtendInfoBox>
                    <TagContainer>
                      {tags ? tags.map(tag => <Tag>{tag}</Tag>) : null}
                    </TagContainer>
                    <Title>{title}</Title>
                  </ExtendInfoBox>
                </PostLinkBox>
              </Post>
            )
          })}
        </Posts>
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
