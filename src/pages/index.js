import React from "react"
import Layout from "../components/layout"
import { CategoryTitle } from "../styles/pageStyles"
import { graphql, useStaticQuery, Link } from "gatsby"
import MainGrid from "../components/indexContent/mainGrid"
import SEO from "../components/SEO"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="홈"
        description="만다린로그 홈페이지"
        pathname="/"
        keywords={["홈,만다린로그"]}
      />
      <MainGrid />
    </Layout>
  )
}

export default IndexPage
