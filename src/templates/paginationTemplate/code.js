import React from "react"
import PageLayout from "../../components/Layout/pageLayout"
import { graphql } from "gatsby"
import {
  PageWrapper,
  CategoryTitle,
  Title,
  DateContainer,
  Bar,
  InfoBox,
  Posts,
  Post,
  PostLinkBox,
  Excerpt,
  Description,
} from "../../styles/pageStyles"
import { StackContainer, StackBadge } from "../../styles/stackSharedStyles"
import SEO from "../../components/SEO"
import PageLink from "../../components/pageLink"
import styled from "styled-components"

const ExtendTitle = styled(Title)`
  padding: 0.3rem 0;
`

const CodePage = props => {
  const { data, pageContext } = props
  const { edges } = data.allMarkdownRemark
  return (
    <PageLayout>
      <SEO
        title="코드"
        description="코드 페이지 리스트"
        pathname="/code"
        keywords={[
          "코딩,만다린로그,코드,자바스크립트,리액트,mandarinlog,javascript,coding,react",
        ]}
      />
      <PageWrapper>
        <CategoryTitle>
          <span role="img" aria-label="notebook">
            💻
          </span>{" "}
          코드
        </CategoryTitle>
        <Description>코딩 공부 노트</Description>
        <Posts>
          {edges.map(edge => {
            const { slug } = edge.node.fields
            const { title, date, stacks } = edge.node.frontmatter
            const { excerpt } = edge.node
            return (
              <PostLinkBox key={slug} to={`/code/${slug}`}>
                <Post>
                  <InfoBox>
                    <ExtendTitle>{title}</ExtendTitle>
                    <StackContainer>
                      {stacks.map((stack, index) => (
                        <StackBadge key={index} stack={stack}>
                          {stack}
                        </StackBadge>
                      ))}
                    </StackContainer>
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
          route={"code"}
          numPages={pageContext.numPages}
          currentPage={pageContext.currentPage}
        />
      </PageWrapper>
    </PageLayout>
  )
}

export default CodePage

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "CODE" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      ...CodeMarkdown
    }
  }
`
