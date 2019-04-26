import React from "react"
import IndexLayout from "../components/Layout/indexLayout"
import MainGrid from "../components/indexContent/mainGrid"
import MainReview from "../components/indexContent/mainReview"
import MainOpinion from "../components/indexContent/mainOpinion"
import SEO from "../components/SEO"
import MainCode from "../components/indexContent/mainCode"
import MainMusic from "../components/indexContent/mainMusic"

const IndexPage = () => {
  return (
    <IndexLayout>
      <SEO
        title="홈"
        description="만다린로그 홈페이지"
        pathname="/"
        keywords={["홈,만다린로그"]}
      />
      <MainGrid />
      {/* <MainOpinion /> */}
      <MainReview />
      <MainCode />
      <MainMusic />
    </IndexLayout>
  )
}

export default IndexPage
