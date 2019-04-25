import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import {
  Title,
  InfoBox,
  Posts,
  Post,
  FeaturedImage,
  PostLinkBox,
} from "../../styles/pageStyles"
import { StackContainer, StackBadge } from "../../styles/stackSharedStyles"
import {
  Wrapper,
  MainPostWrapper,
  MainTitle,
  MainTitleLink,
} from "../../styles/mainSharedStyles"

const ExtendInfoBox = styled(InfoBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainCode = () => {
  const data = useStaticQuery(CODE_QUERY)
  const { edges } = data.allMarkdownRemark
  return (
    <Wrapper>
      <MainPostWrapper>
        <MainTitle>
          <MainTitleLink to={"/code"}>코드</MainTitleLink>
        </MainTitle>
        <Posts>
          {edges.map(edge => {
            const { slug } = edge.node.fields
            const {
              src,
            } = edge.node.frontmatter.featuredImage.childImageSharp.fixed
            const { title, stacks } = edge.node.frontmatter
            return (
              <Post key={slug}>
                <PostLinkBox to={`/code/${slug}`}>
                  <FeaturedImage src={src} />
                  <ExtendInfoBox>
                    <StackContainer>
                      {stacks.map(stack => (
                        <StackBadge stack={stack}>{stack}</StackBadge>
                      ))}
                    </StackContainer>
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

export default MainCode

const CODE_QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "CODE" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: 1
      limit: 8
    ) {
      ...CodeMarkdown
    }
  }
`
