import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import {
  Title,
  Posts,
  Post,
  FeaturedImage,
  PostLinkBox,
} from "../../styles/pageStyles"
import {
  Wrapper,
  MainPostWrapper,
  MainTitle,
  MainTitleLink,
} from "../../styles/mainSharedStyles"

const ExtendFeaturedImage = styled(FeaturedImage)`
  justify-content: center;
  align-items: center;
`

const ExtendTitle = styled(Title)`
  font-size: 2rem;
`

const MainOpinion = () => {
  const data = useStaticQuery(OPINION_QUERY)
  const { edges } = data.allMarkdownRemark
  return (
    <Wrapper color={"white"}>
      <MainPostWrapper>
        <MainTitle>
          <MainTitleLink to={"/opinion"}>오피니언</MainTitleLink>
        </MainTitle>
        <Posts>
          {edges.map(edge => {
            const { slug } = edge.node.fields
            const {
              src,
            } = edge.node.frontmatter.featuredImage.childImageSharp.fixed
            const { title } = edge.node.frontmatter
            return (
              <Post key={slug}>
                <PostLinkBox to={`/opinion/${slug}`}>
                  <ExtendFeaturedImage src={src}>
                    <ExtendTitle>{title}</ExtendTitle>
                  </ExtendFeaturedImage>
                </PostLinkBox>
              </Post>
            )
          })}
        </Posts>
      </MainPostWrapper>
    </Wrapper>
  )
}

export default MainOpinion

const OPINION_QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "OPINION" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: 1
      limit: 8
    ) {
      ...OpinionMarkdown
    }
  }
`
