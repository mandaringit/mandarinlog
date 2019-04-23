import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import HelmetComponent from "../components/helmetComponent"
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
import StarRatingComponent from "react-star-rating-component"

const PlatformBadge = styled.div`
  font-weight: bold;
  padding: 0 0.5rem;
  margin: 0.5rem;
  border-radius: 5px;
  color: ${props => {
    if (props.platform === "Netflix") {
      return "#e52811"
    } else if (props.platform === "Theater") {
      return "#FFC107"
    } else if (props.platform === "Steam") {
      return "white"
    }
  }};
  background-color: #141414;
  margin-bottom: 1rem;
`
const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StarRating = styled(StarRatingComponent)`
  margin-bottom: 0.5rem;
`

const TagContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`

const Tag = styled.div`
  background-color: ${props => props.theme.deepOrangeColor};
  color: white;
  padding: 0 0.3rem;
  margin-right: 0.3rem;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 3px;
`

const ReviewPage = () => {
  const data = useStaticQuery(QUERY)
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <Layout>
      <HelmetComponent title="REVIEW" />
      <CategoryTitle>리뷰 ({totalCount})</CategoryTitle>
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
