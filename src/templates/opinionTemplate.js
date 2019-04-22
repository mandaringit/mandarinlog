import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import HelmetComponent from "../components/helmetComponent"
import {
  TemplateContainer,
  FeaturedImage,
  ContentContainer,
  Title,
  DateContainer,
  Bar,
  Content,
} from "../styles/templateSharedStyle"

// 아직까지 useStaticQuery를 사용하여 context에 접근할 수 있는 방법이 없다.
// 대안은 아래와 같이 export 하면, 컴포넌트에서 props로 받아서 사용 가능하다.

export const query = graphql`
  query($slug: String!) {
    #  $slug는 gatsby-node에서 createPage의 context에서 온다.
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
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

const OpinionTemplate = props => {
  const { frontmatter, html } = props.data.markdownRemark
  const { src } = frontmatter.featuredImage.childImageSharp.fixed
  return (
    <Layout>
      <HelmetComponent title={frontmatter.title} />
      <TemplateContainer>
        <FeaturedImage src={src} />
        <ContentContainer>
          <Title>{frontmatter.title}</Title>
          <DateContainer>🗒 {frontmatter.date}</DateContainer>
          <Bar />
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </ContentContainer>
      </TemplateContainer>
    </Layout>
  )
}

export default OpinionTemplate
