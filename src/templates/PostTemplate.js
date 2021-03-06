import React from "react"
import PageLayout from "../components/Layout/pageLayout"
import styled from "styled-components"
import StarRatingComponent from "react-star-rating-component"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import { Comment } from "../components/disqus"
import { StackContainer, StackBadge } from "../styles/stackSharedStyles"
import { PlatformBadge, TagContainer, Tag } from "../styles/tagsSharedStyles"
import NextPrev from "../components/NextPrev"
import AllSnsShareComp from "../components/SnsShare/AllSnsShareComp"

// 공통

const TemplateContainer = styled.div`
  margin: 1rem auto;
  max-width: ${props => props.theme.templateMaxWidth};
`

const ContentContainer = styled.article`
  padding: 1rem;
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`

const DateContainer = styled.h5`
  color: ${props => props.theme.barColor};
  margin-top: 0.5rem;
`

const StartBar = styled.div`
  border-bottom: 1px solid ${props => props.theme.barColor};
`

const EndBar = styled.div`
  border-bottom: 2px solid ${props => props.theme.barColor};
`

const Content = styled.div`
  margin: 1rem 0;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    color: black;
  }
  blockquote {
    p {
      font-style: italic;
      border-left: 4px solid ${props => props.theme.mainColor};
      padding-left: 1rem;
    }
  }
  code {
    font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono",
      "Liberation Mono", Menlo, Courier, monospace, "Nanum Gothic Coding",
      monospace;
  }
`
// Log

const StarRating = styled(StarRatingComponent)``

// music

const MusicTitle = styled(Title)`
  margin-bottom: 1rem;
`

const Singer = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
`

const PostTemplate = props => {
  const { id, frontmatter, html, excerpt, fields } = props.data.markdownRemark
  const { src } = frontmatter.featuredImage.childImageSharp.fixed
  const { siteUrl } = props.data.site.siteMetadata
  const category_lowercase = frontmatter.category.toLowerCase()
  const disqus = {
    siteUrl,
    slug: fields.slug,
    id,
    title: frontmatter.title,
    category: category_lowercase,
  }
  const { next, prev } = props.pageContext
  return (
    <PageLayout>
      <SEO
        title={frontmatter.title}
        description={excerpt}
        pathname={`/${category_lowercase}/${fields.slug}`}
        keywords={frontmatter.keywords}
      />
      <TemplateContainer>
        <ContentContainer>
          <InfoContainer>
            {/* 로그 */}
            {frontmatter.category === "LOG" ? (
              <>
                <PlatformBadge platform={frontmatter.platform}>
                  {frontmatter.platform}
                </PlatformBadge>
                <Title>{frontmatter.title}</Title>
                <TagContainer>
                  {frontmatter.tags
                    ? frontmatter.tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))
                    : null}
                </TagContainer>
                {frontmatter.star === 0 ? null : (
                  <StarRating
                    name="rate2"
                    editing={false}
                    starCount={5}
                    value={frontmatter.star}
                  />
                )}
              </>
            ) : null}
            {/* 코드 */}
            {frontmatter.category === "CODE" ? (
              <>
                <Title>{frontmatter.title}</Title>
                <StackContainer>
                  {frontmatter.stacks.map((stack, index) => (
                    <StackBadge key={index} stack={stack}>
                      {stack}
                    </StackBadge>
                  ))}
                </StackContainer>
              </>
            ) : null}
            {/* 뮤직 */}
            {frontmatter.category === "MUSIC" ? (
              <>
                <MusicTitle>{frontmatter.album}</MusicTitle>
                <Singer>{frontmatter.singer}</Singer>
              </>
            ) : null}
            <DateContainer>
              <span role="img" aria-label="date">
                📝
              </span>{" "}
              {frontmatter.date}
            </DateContainer>
          </InfoContainer>
          <StartBar />
          <Content id="content" dangerouslySetInnerHTML={{ __html: html }} />
          <AllSnsShareComp
            siteUrl={siteUrl}
            category={category_lowercase}
            slug={fields.slug}
            title={frontmatter.title}
            excerpt={excerpt}
            src={src}
          />
          <EndBar />
          <NextPrev next={next} prev={prev} />
        </ContentContainer>
        {Comment(disqus)}
      </TemplateContainer>
    </PageLayout>
  )
}

export default PostTemplate

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
        category
        keywords
        # log
        platform
        star
        tags
        # code
        stacks
        # music
        album
        albumCategory
        singer
        date(formatString: "YYYY년 MM월 DD일")
        featuredImage {
          childImageSharp {
            fixed(width: 400) {
              src
            }
          }
        }
      }
      html
      excerpt(pruneLength: 130, truncate: true)
      fields {
        slug
      }
    }
  }
`
