import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { StackContainer, StackBadge } from "../../styles/stackSharedStyles"
import {
  Wrapper,
  MainPostWrapper,
  MainTitle,
  MainTitleLink,
  Title,
  InfoBox,
  Posts,
  Post,
  FeaturedImage,
  PostLinkBox,
} from "../../styles/mainSharedStyles"

const ExtendStackContainer = styled(StackContainer)`
  /* align-self: start; */
  padding: 0.5rem;
  margin-bottom: 0;
`

const MainCode = () => {
  const data = useStaticQuery(CODE_QUERY)
  const { edges } = data.allMarkdownRemark
  return (
    <Wrapper>
      <MainPostWrapper>
        <MainTitle>
          <MainTitleLink to={"/code"}>
            <span role="img" aria-label="notebook">
              💻
            </span>{" "}
            코드
          </MainTitleLink>
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
                  <FeaturedImage src={src}>
                    <ExtendStackContainer>
                      {stacks.map((stack, index) => (
                        <StackBadge key={index} stack={stack}>
                          {stack}
                        </StackBadge>
                      ))}
                    </ExtendStackContainer>
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
