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
  StarRating,
} from "../styles/templateSharedStyle"
import { PlatformBadge, TagContainer, Tag } from "../styles/tagsSharedStyles"
import SEO from "../components/SEO"
import { Comment } from "../components/disqus"

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
        date(formatString: "YYYY년 MM월 DD일")
        category
        platform
        star
        tags
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

const MovieTemplate = props => {
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
        pathname={`/movie/${fields.slug}`}
        keywords={frontmatter.keywords}
      />
      <TemplateContainer>
        <FeaturedImage src={src} />
        <ContentContainer>
          <InfoContainer>
            <PlatformBadge platform={frontmatter.platform}>
              {frontmatter.platform}
            </PlatformBadge>
            <Title>{frontmatter.title}</Title>
            <TagContainer>
              {frontmatter.tags
                ? frontmatter.tags.map(tag => <Tag>{tag}</Tag>)
                : null}
            </TagContainer>
            <StarRating
              name="rate2"
              editing={false}
              starCount={5}
              value={frontmatter.star}
            />
            <DateContainer>
              <span role="img" aria-label="memo">
                📝
              </span>{" "}
              {frontmatter.date}
            </DateContainer>
          </InfoContainer>
          <Bar />
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </ContentContainer>
        {Comment(disqus)}
      </TemplateContainer>
    </PageLayout>
  )
}

export default MovieTemplate
