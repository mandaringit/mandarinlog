import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import HelmetComponent from "../components/helmetComponent"
import {
  Title,
  FeaturedImage,
  DateContainer,
  Excerpt,
  Bar,
  PostLinkBox,
  InfoBox,
} from "../styles/pageStyles"

const Posts = styled.ol`
  list-style-type: none;
  margin: 0;
`
const Post = styled.li`
  margin: 1rem 0;
`

const OpinionPage = () => {
  const data = useStaticQuery(QUERY)
  const { edges, totalCount } = data.allMarkdownRemark
  return (
    <Layout>
      <HelmetComponent title="OPINION" />
      <h1>OPINION ({totalCount})</h1>
      <Posts>
        {edges.map(edge => {
          const { slug } = edge.node.fields
          {
            /* const {
            src,
          } = edge.node.frontmatter.featuredImage.childImageSharp.fixed */
          }
          const { title, date } = edge.node.frontmatter
          const { excerpt } = edge.node
          return (
            <Post key={slug}>
              <PostLinkBox to={`/opinion/${slug}`}>
                {/* <FeaturedImage src={src} /> */}
                <InfoBox>
                  <Title>{title}</Title>
                  <DateContainer>🗒 {date}</DateContainer>
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

export default OpinionPage

const QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "OPINION" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY년 MM월 DD일")
            # featuredImage {
            #   childImageSharp {
            #     fixed(width: 900) {
            #       src
            #     }
            #   }
            # }
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
