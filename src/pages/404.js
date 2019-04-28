import React from "react"
import PageLayout from "../components/Layout/pageLayout"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import styled from "styled-components"

const Wrapper = styled.div`
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`

const NotFound = () => {
  return (
    <PageLayout>
      <SEO title="404 NOT FOUND" />
      <Wrapper>
        <h1>
          <span role="img" aria-label="stop">
            🚧
          </span>{" "}
          404 NOT FOUND{" "}
          <span role="img" aria-label="stop">
            🚧
          </span>
        </h1>
        <h1>페이지를 찾을 수 없습니다.</h1>
        <p>
          <Link to="/">홈으로</Link>
        </p>
      </Wrapper>
    </PageLayout>
  )
}

export default NotFound
