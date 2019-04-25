import React from "react"
import PageLayout from "../components/Layout/pageLayout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const NotFound = () => {
  return (
    <PageLayout>
      <SEO title="404 NOT FOUND" />
      <h1>페이지를 찾을 수 없습니다.</h1>
      <p>
        <Link to="/">홈으로</Link>
      </p>
    </PageLayout>
  )
}

export default NotFound
