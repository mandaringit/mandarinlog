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

const MainGrid = () => {
  return (
    <Wrapper>
      <MainPostWrapper>
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
      </MainPostWrapper>
    </Wrapper>
  )
}

export default MainGrid
