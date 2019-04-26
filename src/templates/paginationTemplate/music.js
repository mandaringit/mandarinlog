import React from "react"
import PageLayout from "../../components/Layout/pageLayout"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { CategoryTitle, Posts, Post } from "../../styles/pageStyles"
import SEO from "../../components/SEO"
import PageLink from "../../components/pageLink"

const ExtendPosts = styled(Posts)`
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: minmax(10rem, 13rem);
`

const PostLinkBox = styled(Link)`
  background-color: white;
  border-radius: 3px;
  color: #000000;
  display: flex;
  text-decoration: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  height: 100%;
  padding: 1rem 0 1rem 1rem;
`

const FeaturedImage = styled.img`
  border-radius: 3px;
  margin: 0;
  width: 50%;
  height: 100%;
  min-height: 10rem;
  object-fit: cover;
`

const InfoBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`

const Title = styled.h3`
  margin-bottom: 0.5rem;
  text-align: center;
`

const Singer = styled.h5``

const TranslationBadge = styled.div`
  font-size: 0.7rem;
  padding: 0 0.4rem;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${props => (props.translation ? "#4CAF50" : "red")};
`

const MusicPage = props => {
  const { data, pageContext } = props
  const { edges } = data.allMarkdownRemark
  return (
    <PageLayout>
      <SEO
        title="해외음악"
        description="해외음악 페이지 리스트"
        pathname="/music"
        keywords={["해외음악,POP,가사,만다린로그"]}
      />
      <CategoryTitle>해외음악</CategoryTitle>
      <ExtendPosts>
        {edges.map(edge => {
          const { slug } = edge.node.fields
          const {
            src,
          } = edge.node.frontmatter.featuredImage.childImageSharp.fixed
          const { title, singer, translation } = edge.node.frontmatter
          return (
            <Post key={slug}>
              <PostLinkBox to={`/music/${slug}`}>
                <FeaturedImage src={src} />
                <InfoBox>
                  <Title>{title}</Title>
                  <Singer>{singer}</Singer>
                  {translation ? (
                    <TranslationBadge translation={translation}>
                      가사 번역
                    </TranslationBadge>
                  ) : null}
                </InfoBox>
              </PostLinkBox>
            </Post>
          )
        })}
      </ExtendPosts>
      <PageLink route={"review"} numPages={pageContext.numPages} />
    </PageLayout>
  )
}

export default MusicPage

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "MUSIC" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      ...MusicMarkdown
    }
  }
`
