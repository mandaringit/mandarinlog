import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import {
  Wrapper,
  MainPostWrapper,
  MainTitleBar,
} from "../../styles/mainSharedStyles"

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 1rem;
`

const LinkContainer = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
`

const Post = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.postBorderColor};
  background-color: white;
`

const StackContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid ${props => props.theme.postBorderColor};
  padding: 0.3rem 0.3rem 0.3rem 0.5rem;
`

const StackBadge = styled.h6`
  font-size: 0.6rem;
  font-weight: bold;
  margin: 0 0.5rem 0 0;
  color: ${props => props.theme.stackColor};
`

const Title = styled.h5`
  font-weight: bold;
  text-align: center;
  margin: 0.5rem;
`

const MainCode = () => {
  const data = useStaticQuery(CODE_QUERY)
  const { edges } = data.allMarkdownRemark
  return (
    <Wrapper color="#F7F7F7">
      <MainPostWrapper>
        <MainTitleBar icon="💻" label="notebook" title="코드" route="/code" />
        <PostsContainer>
          {edges.map(edge => {
            const { slug } = edge.node.fields
            const { title, stacks } = edge.node.frontmatter
            return (
              <LinkContainer key={slug} to={`/code/${slug}`}>
                <Post>
                  <StackContainer>
                    {stacks.map((stack, index) => (
                      <StackBadge key={index} stack={stack}>
                        {stack}
                      </StackBadge>
                    ))}
                  </StackContainer>
                  <Title>{title}</Title>
                </Post>
              </LinkContainer>
            )
          })}
        </PostsContainer>
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
      limit: 6
    ) {
      ...CodeMarkdown
    }
  }
`
