import React from "react"
import PageLayout from "../components/Layout/pageLayout"
import { useStaticQuery, graphql } from "gatsby"
import {
  CategoryTitle,
  Title,
  DateContainer,
  Bar,
  InfoBox,
  Posts,
  Post,
  Excerpt,
  FeaturedImage,
  PostLinkBox,
} from "../styles/pageStyles"
import SEO from "../components/SEO"

const OpinionPage = () => {
  const data = useStaticQuery(OPINION_QUERY)
  const { edges } = data.allMarkdownRemark
  return (
    <PageLayout>
      <SEO
        title="오피니언"
        description="오피니언 페이지 리스트"
        pathname="/opinion"
        keywords={["오피니언,블로그,만다린로그"]}
      />
      <CategoryTitle>오피니언</CategoryTitle>
      {/* <div>카테고리 리스트 간단하게 추가</div> */}
      <Posts>
        {edges.map(edge => {
          const { slug } = edge.node.fields
          const {
            src,
          } = edge.node.frontmatter.featuredImage.childImageSharp.fixed

          const { title, date } = edge.node.frontmatter
          const { excerpt } = edge.node
          return (
            <Post key={slug}>
              <PostLinkBox to={`/opinion/${slug}`}>
                <FeaturedImage src={src} />
                <InfoBox>
                  <Title>{title}</Title>
                  <DateContainer>
                    <span role="img" aria-label="memo">
                      📝
                    </span>{" "}
                    {date}
                  </DateContainer>
                  <Bar />
                  <Excerpt>{excerpt}</Excerpt>
                </InfoBox>
              </PostLinkBox>
            </Post>
          )
        })}
      </Posts>
    </PageLayout>
  )
}

export default OpinionPage

const OPINION_QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "OPINION" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      ...OpinionMarkdown
    }
  }
`
