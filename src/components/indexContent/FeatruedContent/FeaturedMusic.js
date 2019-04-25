import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import FeaturedContentCard from "./FeaturedContentCard"

const FeaturedMusic = () => {
  const data = useStaticQuery(RECENT_ONE_MUSIC_QUERY)
  const { edges } = data.allMarkdownRemark
  return <FeaturedContentCard edges={edges} />
}

export default FeaturedMusic

const RECENT_ONE_MUSIC_QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "MUSIC" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1
    ) {
      ...MusicMarkdown
    }
  }
`
