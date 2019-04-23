import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
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
} from "../styles/templateSharedStyle"
import { StackContainer, StackBadge } from "../styles/stackSharedStyles"
import SEO from "../components/SEO"

// 아직까지 useStaticQuery를 사용하여 context에 접근할 수 있는 방법이 없다.
// 대안은 아래와 같이 export 하면, 컴포넌트에서 props로 받아서 사용 가능하다.

export const query = graphql`
  query($slug: String!) {
    #  $slug는 gatsby-node에서 createPage의 context에서 온다.
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
        stacks
        keywords
        featuredImage {
          childImageSharp {
            fixed(width: 900) {
              src
            }
          }
        }
      }
      html
      excerpt
      fields {
        slug
      }
    }
  }
`

const CodeTemplate = props => {
  const { frontmatter, html, excerpt, fields } = props.data.markdownRemark
  const { src } = frontmatter.featuredImage.childImageSharp.fixed
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={excerpt}
        pathname={`/code/${fields.slug}`}
        keywords={frontmatter.keywords}
      />
      <TemplateContainer>
        <FeaturedImage src={src} />
        <ContentContainer>
          <InfoContainer>
            <Title>{frontmatter.title}</Title>
            <StackContainer>
              {frontmatter.stacks.map(stack => (
                <StackBadge stack={stack}>{stack}</StackBadge>
              ))}
            </StackContainer>
            <DateContainer>
              <span role="img" aria-label="date">
                📝
              </span>{" "}
              {frontmatter.date}
            </DateContainer>
          </InfoContainer>
          <Bar />

          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </ContentContainer>
      </TemplateContainer>
    </Layout>
  )
}

export default CodeTemplate
