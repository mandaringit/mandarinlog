import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { NavigateNext } from "styled-icons/material/NavigateNext"
import { NavigateBefore } from "styled-icons/material/NavigateBefore"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin: 2rem 0 1rem 0;
`

const LinkBox = styled(Link)`
  color: black;
  text-decoration: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  :hover {
    transition-duration: 1.3s;
    background-color: #e0e0e0;
  }
`

const CardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const FeaturedImage = styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  min-height: 5rem;
`

const NextIcon = styled(NavigateNext)`
  width: 1rem;
  color: ${props => props.theme.deepOrangeColor};
`

const BeforeIcon = styled(NavigateBefore)`
  width: 1rem;
  color: ${props => props.theme.deepOrangeColor};
`

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Label = styled.div`
  font-size: 0.6rem;
  font-weight: bold;
  color: ${props => props.theme.deepOrangeColor};
`

const Title = styled.h6`
  margin: auto 0;
  text-align: center;
  font-size: 0.8rem;
  padding: 0 0.3rem 0.5rem 0.3rem;
`

const NextPrev = ({ next, prev }) => {
  return (
    <Container>
      {prev.path !== null ? (
        <LinkBox to={prev.path}>
          <CardWrapper>
            <FeaturedImage src={prev.imageSrc} />
            <LabelWrapper>
              <BeforeIcon />
              <Label>이전 포스트</Label>
            </LabelWrapper>
            <Title>{prev.title}</Title>
          </CardWrapper>
        </LinkBox>
      ) : (
        <CardWrapper />
      )}
      {next.path !== null ? (
        <LinkBox to={next.path}>
          <CardWrapper>
            <FeaturedImage src={next.imageSrc} />
            <LabelWrapper>
              <Label>다음 포스트</Label>
              <NextIcon />
            </LabelWrapper>
            <Title>{next.title}</Title>
          </CardWrapper>
        </LinkBox>
      ) : (
        <CardWrapper />
      )}
    </Container>
  )
}

export default NextPrev
