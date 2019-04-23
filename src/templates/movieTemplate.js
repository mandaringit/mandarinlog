import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import HelmetComponent from "../components/helmetComponent"
import styled from "styled-components"
import {
  TemplateContainer,
  FeaturedImage,
  ContentContainer,
  Title,
  DateContainer,
  Bar,
  Content,
  InfoContainer,
  StarRating,
} from "../styles/templateSharedStyle"
import { PlatformBadge, TagContainer, Tag } from "../styles/tagsSharedStyles"

// 아직까지 useStaticQuery를 사용하여 context에 접근할 수 있는 방법이 없다.
// 대안은 아래와 같이 export 하면, 컴포넌트에서 props로 받아서 사용 가능하다.

export const query = graphql`
  query($slug: String!) {
    #  $slug는 gatsby-node에서 createPage의 context에서 온다.
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
        platform
        star
        tags
        featuredImage {
          childImageSharp {
            fixed(width: 900) {
              src
            }
          }
        }
      }
      html
    }
  }
`

const MovieTemplate = props => {
  const { frontmatter, html } = props.data.markdownRemark
  const { src } = frontmatter.featuredImage.childImageSharp.fixed
  return (
    <Layout>
      <HelmetComponent title={frontmatter.title} />
      <TemplateContainer>
        <FeaturedImage src={src} />
        <ContentContainer>
          <InfoContainer>
            <PlatformBadge platform={frontmatter.platform}>
              {frontmatter.platform}
            </PlatformBadge>
            <Title>{frontmatter.title}</Title>
            <TagContainer>
              {frontmatter.tags
                ? frontmatter.tags.map(tag => <Tag>{tag}</Tag>)
                : null}
            </TagContainer>
            <StarRating
              name="rate2"
              editing={false}
              starCount={5}
              value={frontmatter.star}
            />
            <DateContainer>📝 {frontmatter.date}</DateContainer>
          </InfoContainer>
          <Bar />
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </ContentContainer>
      </TemplateContainer>
    </Layout>
  )
}

export default MovieTemplate
