import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import FeaturedContentCard from "./FeaturedContentCard"

const FeaturedReview = () => {
  const data = useStaticQuery(REVIEW_QUERY)
  const { edges } = data.allMarkdownRemark
  return <FeaturedContentCard edges={edges} />
}

export default FeaturedReview

const REVIEW_QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { in: ["MOVIE", "GAME"] } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1
    ) {
      ...ReviewMarkdown
    }
  }
`
