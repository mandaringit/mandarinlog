import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import {
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
} from "../styles/pageStyles"
import { PlatformBadge, TagContainer, Tag } from "../styles/tagsSharedStyles"
import SEO from "../components/SEO"

const ReviewPage = () => {
  const data = useStaticQuery(QUERY)
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO
        title="리뷰"
        description="리뷰 페이지 리스트"
        pathname="/review"
        keywords={["리뷰,만다린로그,영화,게임"]}
      />
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
                  <PlatformBadge platform={platform}>{platform}</PlatformBadge>
                </FeaturedImage>
                <InfoBox>
                  <TagContainer>
                    {tags ? tags.map(tag => <Tag>{tag}</Tag>) : null}
                  </TagContainer>
                  <Title>{title}</Title>
                  <DateContainer>📝 {date}</DateContainer>
                  <Bar />
                  <Excerpt>{excerpt}</Excerpt>
                </InfoBox>
              </PostLinkBox>
            </Post>
          )
        })}
      </Posts>
    </Layout>
  )
}

export default ReviewPage

const QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { in: ["MOVIE", "GAME"] } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY년 MM월 DD일")
            platform
            tags
            category
            featuredImage {
              childImageSharp {
                fixed(width: 900) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`
