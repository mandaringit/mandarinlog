import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import FeaturedContentCard from "./FeaturedContentCard"

const FeaturedOpinion = () => {
  const data = useStaticQuery(RECENT_ONE_OPINION_QUERY)
  const { edges } = data.allMarkdownRemark
  return <FeaturedContentCard edges={edges} />
}

export default FeaturedOpinion

const RECENT_ONE_OPINION_QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "OPINION" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1
    ) {
      ...OpinionMarkdown
    }
  }
`
