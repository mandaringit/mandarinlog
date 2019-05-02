import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import FeaturedContentCard from "./FeaturedContentCard"

const FeaturedLog = () => {
  const data = useStaticQuery(LOG_QUERY)
  const { edges } = data.allMarkdownRemark
  return <FeaturedContentCard edges={edges} />
}

export default FeaturedLog

const LOG_QUERY = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "LOG" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2
    ) {
      ...LogMarkdown
    }
  }
`
