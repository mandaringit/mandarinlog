import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { PlatformBadge } from "../../styles/tagsSharedStyles"
import {
  Wrapper,
  MainPostWrapper,
  MainTitle,
  MainTitleLink,
  Posts,
  Post,
  PostLinkBox,
  FeaturedImage,
  Title,
  InfoBox,
} from "../../styles/mainSharedStyles"

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
            const { title, platform, category } = edge.node.frontmatter
            const lowerCaseCategory = category.toLowerCase()
            return (
              <Post key={slug}>
                <PostLinkBox to={`/${lowerCaseCategory}/${slug}`}>
                  <FeaturedImage src={src}>
                    <PlatformBadge platform={platform}>
                      {platform}
                    </PlatformBadge>
                    <InfoBox>
                      <Title>{title}</Title>
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
