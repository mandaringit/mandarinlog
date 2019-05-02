import React from "react"
import PageLayout from "../../components/Layout/pageLayout"
import { graphql } from "gatsby"
import {
  PageWrapper,
  CategoryTitle,
  Bar,
  Title,
  Posts,
  Post,
  Excerpt,
  InfoBox,
  FeaturedImage,
  PostLinkBox,
  DateContainer,
} from "../../styles/pageStyles"
import { PlatformBadge, TagContainer, Tag } from "../../styles/tagsSharedStyles"
import SEO from "../../components/SEO"
import PageLink from "../../components/pageLink"

const ReviewPage = props => {
  const { data, pageContext } = props
  const { edges } = data.allMarkdownRemark
  return (
    <PageLayout>
      <SEO
        title="리뷰"
        description="리뷰 페이지 리스트"
        pathname="/review"
        keywords={["리뷰,만다린로그,영화,게임"]}
      />
      <PageWrapper>
        <CategoryTitle>리뷰</CategoryTitle>
        <Posts>
          {edges.map(edge => {
            const { slug } = edge.node.fields
            const {
              src,
            } = edge.node.frontmatter.featuredImage.childImageSharp.fixed
            const {
              title,
              platform,
              tags,
              date,
              category,
            } = edge.node.frontmatter
            const { excerpt } = edge.node
            const lowerCaseCategory = category.toLowerCase()
            return (
              <Post key={slug}>
                <PostLinkBox to={`/${lowerCaseCategory}/${slug}`}>
                  <FeaturedImage src={src}>
                    <PlatformBadge platform={platform}>
                      {platform}
                    </PlatformBadge>
                  </FeaturedImage>
                  <InfoBox>
                    <TagContainer>
                      {tags
                        ? tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)
                        : null}
                    </TagContainer>
                    <Title>{title}</Title>
                    <DateContainer>
                      <span role="img" aria-label="memo">
                        📝
                      </span>{" "}
                      {date}
                    </DateContainer>
                    <Bar />
                    <Excerpt>{excerpt}</Excerpt>
                  </InfoBox>
                </PostLinkBox>
              </Post>
            )
          })}
        </Posts>
        <PageLink
          route={"review"}
          numPages={pageContext.numPages}
          currentPage={pageContext.currentPage}
        />
      </PageWrapper>
    </PageLayout>
  )
}

export default ReviewPage

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "REVIEW" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      ...ReviewMarkdown
    }
  }
`
