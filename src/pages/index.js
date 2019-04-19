import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HelmetComponent from "../components/helmetComponent"

const IndexPage = () => {
  return (
    <Layout>
      <HelmetComponent title="홈" />
      <h1>만다린디고</h1>
      <h3>블로그를 시작한다</h3>
      <p>만다린 그의 생각</p>
    </Layout>
  )
}

export default IndexPage
