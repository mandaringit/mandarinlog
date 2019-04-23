import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const NotFound = () => {
  return (
    <Layout>
      <SEO title="404 NOT FOUND" />
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>
        <Link to="/">홈으로</Link>
      </p>
    </Layout>
  )
}

export default NotFound
