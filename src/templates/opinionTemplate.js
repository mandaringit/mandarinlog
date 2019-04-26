import React from "react"
import PageLayout from "../components/Layout/pageLayout"
import { graphql } from "gatsby"
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
import SEO from "../components/SEO"
import { Comment } from "../components/disqus"

const OpinionTemplate = props => {
  const { id, frontmatter, html, excerpt, fields } = props.data.markdownRemark
  const { src } = frontmatter.featuredImage.childImageSharp.fixed
  const { siteUrl } = props.data.site.siteMetadata
  const category = frontmatter.category.toLowerCase()
  const disqus = {
    siteUrl,
    slug: fields.slug,
    id,
    title: frontmatter.title,
    category,
  }
  return (
    <PageLayout>
      <SEO
        title={frontmatter.title}
        description={excerpt}
        pathname={`/opinion/${fields.slug}`}
        keywords={frontmatter.keywords}
      />
      <TemplateContainer>
        <FeaturedImage src={src} />
        <ContentContainer>
          <InfoContainer>
            <Title>{frontmatter.title}</Title>
            <DateContainer>
              <span role="img" aria-label="date">
                📝
              </span>{" "}
              {frontmatter.date}
            </DateContainer>
          </InfoContainer>
          <Bar />
          <Content dangerouslySetInnerHTML={{ __html: html }} />
          <Bar />
        </ContentContainer>
        {Comment(disqus)}
      </TemplateContainer>
    </PageLayout>
  )
}

export default OpinionTemplate

// 아직까지 useStaticQuery를 사용하여 context에 접근할 수 있는 방법이 없다.
// 대안은 아래와 같이 export 하면, 컴포넌트에서 props로 받아서 사용 가능하다.

export const query = graphql`
  query($slug: String!) {
    #  $slug는 gatsby-node에서 createPage의 context에서 온다.
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        keywords
        category
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
      excerpt
      fields {
        slug
      }
    }
  }
`
