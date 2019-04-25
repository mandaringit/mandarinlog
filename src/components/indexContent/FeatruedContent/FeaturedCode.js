import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import FeaturedContentCard from "./FeaturedContentCard"

const FeaturedCode = () => {
  const data = useStaticQuery(RECENT_ONE_CODE_QUERY)
  const { edges } = data.allMarkdownRemark
  return <FeaturedContentCard edges={edges} />
}

export default FeaturedCode

const RECENT_ONE_CODE_QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "CODE" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1
    ) {
      ...CodeMarkdown
    }
  }
`
