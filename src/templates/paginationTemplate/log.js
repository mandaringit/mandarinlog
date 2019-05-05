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
  Description,
} from "../../styles/pageStyles"
import { PlatformBadge, TagContainer, Tag } from "../../styles/tagsSharedStyles"
import SEO from "../../components/SEO"
import PageLink from "../../components/pageLink"

const LogPage = props => {
  const { data, pageContext } = props
  const { edges } = data.allMarkdownRemark
  return (
    <PageLayout>
      <SEO
        title="로그"
        description="로그 페이지 리스트"
        pathname="/log"
        keywords={["블로그,리뷰,만다린로그,영화,게임,IT"]}
      />
      <PageWrapper>
        <CategoryTitle>
          <span role="img" aria-label="pen">
            📇
          </span>{" "}
          로그
        </CategoryTitle>
        <Description>보고 느낀것들의 기록</Description>
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
              subCategory,
            } = edge.node.frontmatter
            const { excerpt } = edge.node
            const lowerCaseCategory = category.toLowerCase()
            return (
              <PostLinkBox key={slug} to={`/${lowerCaseCategory}/${slug}`}>
                <Post>
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
                    <Title>
                      {subCategory ? `[${subCategory}] ` : null}
                      {title}
                    </Title>
                    <DateContainer>
                      <span role="img" aria-label="memo">
                        📝
                      </span>{" "}
                      {date}
                    </DateContainer>
                    <Bar />
                    <Excerpt>{excerpt}</Excerpt>
                  </InfoBox>
                </Post>
              </PostLinkBox>
            )
          })}
        </Posts>
        <PageLink
          route={"log"}
          numPages={pageContext.numPages}
          currentPage={pageContext.currentPage}
        />
      </PageWrapper>
    </PageLayout>
  )
}

export default LogPage

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "LOG" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      ...LogMarkdown
    }
  }
`
