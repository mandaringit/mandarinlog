import React from "react"
import styled from "styled-components"
import {
  Wrapper,
  MainPostWrapper,
  MainTitle,
  MainTitleLink,
} from "../../styles/mainSharedStyles"
import FeaturedReview from "./FeatruedContent/FeaturedReview"
import FeaturedCode from "./FeatruedContent/FeaturedCode"
import FeaturedMusic from "./FeatruedContent/FeaturedMusic"
import FeaturedOpinion from "./FeatruedContent/FeaturedOpinion"

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`

const PostsGrid = styled.div`
  display: grid;
  @media (min-width: 300px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(4, 15rem);
    grid-gap: 0.3rem;
  }

  /* // 태블릿 디바이스 (가로 해상도가 768px 보다 큰 화면에 적용) */
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 15rem);
    grid-gap: 0.5rem;
  }
`

// 사이드 컨텐츠는 아직 주석처리
const MainGrid = () => {
  return (
    <Wrapper>
      <MainPostWrapper>
        {/* <TopGrid> */}
        {/* <div> */}
        <MainTitle>
          <MainTitleLink to={"/"}>
            <span role="img" aria-label="fire">
              🔥
            </span>{" "}
            LATEST
          </MainTitleLink>
        </MainTitle>
        <PostsGrid>
          <FeaturedReview />
          <FeaturedOpinion />
          <FeaturedCode />
          <FeaturedMusic />
        </PostsGrid>
        {/* </div> */}
        {/* <div>사이드 컨텐츠</div> */}
        {/* </TopGrid> */}
      </MainPostWrapper>
    </Wrapper>
  )
}

export default MainGrid
