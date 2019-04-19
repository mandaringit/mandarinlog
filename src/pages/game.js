import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import HelmetComponent from "../components/helmetComponent"

const Posts = styled.ol`
  list-style-type: none;
  margin: 0;
`
const Post = styled.li`
  margin: 1rem 0;
`

const FeaturedImage = styled.img`
  margin: 0;
`
const GameLink = styled(Link)`
  background-color: white;
  color: #000000;
  display: block;
  padding: 1rem;
  text-decoration: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  :hover {
    background: ${props => props.theme.hoverColor};
  }
`

const Title = styled.h3`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

const DateContainer = styled.div`
  color: ${props => props.theme.thinMainColor};
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
`

const Singer = styled.div`
  font-weight: bold;
  font-size: 0.7rem;
`

const Content = styled.p`
  color: black;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`

const Bar = styled.div`
  border-bottom: 1px solid ${props => props.theme.barColor};
`

const MusicPage = () => {
  const data = useStaticQuery(QUERY)
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <HelmetComponent title="GAME" />
      <h1>GAME ({edges.length})</h1>
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
              <GameLink to={`/game/${slug}`}>
                <FeaturedImage src={src} />
                <Title>{title}</Title>
                {/* <Singer>🎤 {singer}</Singer> */}
                <DateContainer>🗒 {date}</DateContainer>
                {/* {translation ? <p>"번역 완료"</p> : <p>"미번역"</p>} */}
                <Bar />
                <Content>{excerpt}</Content>
              </GameLink>
            </Post>
          )
        })}
      </Posts>
    </Layout>
  )
}

export default MusicPage

const QUERY = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "GAME" } } }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY년 MM월 DD일")
            featuredImage {
              childImageSharp {
                fixed(width: 1000) {
                  src
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
        }
      }
    }
  }
`
