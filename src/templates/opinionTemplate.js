import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import HelmetComponent from "../components/helmetComponent"
import styled from "styled-components"

// 아직까지 useStaticQuery를 사용하여 context에 접근할 수 있는 방법이 없다.
// 대안은 아래와 같이 export 하면, 컴포넌트에서 props로 받아서 사용 가능하다.

export const query = graphql`
  query($slug: String!) {
    #  $slug는 gatsby-node에서 createPage의 context에서 온다.
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
      }
      html
    }
  }
`

const DateContainer = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  color: ${props => props.theme.thinMainColor};
`

const Bar = styled.div`
  border-bottom: 1px solid ${props => props.theme.barColor};
`

const Content = styled.div`
  margin: 1rem auto;
  max-width: 1200px;
`

const OpinionTemplate = props => {
  return (
    <Layout>
      <HelmetComponent title={props.data.markdownRemark.frontmatter.title} />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <DateContainer>
        🗒 {props.data.markdownRemark.frontmatter.date}
      </DateContainer>
      <Bar />
      <Content
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      />
    </Layout>
  )
}

export default OpinionTemplate
