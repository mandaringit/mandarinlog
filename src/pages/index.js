import React from "react"
import IndexLayout from "../components/Layout/indexLayout"
import MainGrid from "../components/indexContent/mainGrid"
import MainReview from "../components/indexContent/mainReview"
import MainOpinion from "../components/indexContent/mainOpinion"
import SEO from "../components/SEO"
import MainCode from "../components/indexContent/mainCode"
import MainMusic from "../components/indexContent/mainMusic"
import { Link } from "gatsby"
import styled from "styled-components"

const GotoTop = styled.div`
  background-color: black;
  text-align: center;
  padding: 1rem;
`

const ExtendLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: white;
  padding: 1rem;
`

const IndexPage = () => {
  return (
    <IndexLayout>
      <SEO
        title="홈"
        description="만다린로그 홈페이지"
        pathname="/"
        keywords={["홈", "만다린로그"]}
      />
      <MainGrid />
      <MainOpinion />
      <MainReview />
      <MainCode />
      <MainMusic />
      <GotoTop>
        <ExtendLink to="/">
          <span role="img" aria-label="up">
            👆
          </span>
          맨위로
        </ExtendLink>
      </GotoTop>
    </IndexLayout>
  )
}

export default IndexPage
