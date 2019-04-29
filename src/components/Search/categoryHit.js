// 나중에 개별 검색에 사용해라

import React from "react"
import { Highlight, Snippet } from "react-instantsearch-dom"
import styled from "styled-components"
import { Link } from "gatsby"
import { PlatformBadge } from "../../styles/tagsSharedStyles"
import { StackBadge, StackContainer } from "../../styles/stackSharedStyles"

const Wrapper = styled.article``

const InfoContainer = styled.div`
  display: flex;
  margin: 0.5rem 0;
  flex-wrap: wrap;
  flex-direction: column;
`

const ContainData = styled.div`
  display: flex;
  margin: 0.5rem 0;
  align-items: center;
`

const Excerpt = styled.div`
  font-size: 0.6rem;
  color: gray;
`

const Platform = styled(PlatformBadge)`
  padding: 0 0.2rem;
  font-size: 0.7rem;
  margin: 0;
  margin-right: 0.5rem;
`
const Stack = styled(StackBadge)`
  padding: 0 0.2rem;
  font-size: 0.8rem;
  color: black;
`

const ExtendLink = styled(Link)``

const Title = styled.div`
  font-weight: bold;
  border-radius: 5px;
  margin-right: 0.5rem;
  font-size: 1rem;
`

const Day = styled.div`
  color: gray;
  font-size: 0.7rem;
  margin-right: 0.5rem;
`

export const ReviewsHit = props => {
  const { category } = props.hit
  const lowerCategory = category.toLowerCase()

  return (
    <Wrapper>
      <InfoContainer>
        <Title>
          <ExtendLink to={`/${lowerCategory}/${props.hit.fields.slug}`}>
            <Highlight attribute="title" hit={props.hit} tagName="mark" />
          </ExtendLink>
        </Title>
        <ContainData>
          <Day>{props.hit.date}</Day>
          <Platform platform={props.hit.platform}>
            {props.hit.platform}
          </Platform>
        </ContainData>
      </InfoContainer>
      <Excerpt>
        <Snippet attribute="excerpt" hit={props.hit} tagName="mark" />
        ...
      </Excerpt>
    </Wrapper>
  )
}

export const CodesHit = props => {
  const { category } = props.hit
  const lowerCategory = category.toLowerCase()
  return (
    <Wrapper>
      <InfoContainer>
        <ExtendLink to={`/${lowerCategory}/${props.hit.fields.slug}`}>
          <Title>
            <Highlight attribute="title" hit={props.hit} tagName="mark" />
          </Title>
        </ExtendLink>
        <ContainData>
          <Day>
            <Highlight attribute="date" hit={props.hit} tagName="mark" />
          </Day>
          <StackContainer>
            {props.hit.stacks.map((stack, index) => (
              <Stack key={index} stack={stack}>
                {stack}
              </Stack>
            ))}
          </StackContainer>
        </ContainData>
      </InfoContainer>
      <Excerpt>
        <Snippet attribute="excerpt" hit={props.hit} tagName="mark" />
        ...
      </Excerpt>
    </Wrapper>
  )
}

export const OpinionsHit = props => {
  const { category } = props.hit
  const lowerCategory = category.toLowerCase()
  return (
    <Wrapper>
      <InfoContainer>
        <ExtendLink to={`/${lowerCategory}/${props.hit.fields.slug}`}>
          <Title>
            <Highlight attribute="title" hit={props.hit} tagName="mark" />
          </Title>
        </ExtendLink>
        <Day>
          <Highlight attribute="date" hit={props.hit} tagName="mark" />
        </Day>
      </InfoContainer>
      <Excerpt>
        <Snippet attribute="excerpt" hit={props.hit} tagName="mark" />
        ...
      </Excerpt>
    </Wrapper>
  )
}

const SubTitle = styled.div`
  font-size: 0.7rem;
  color: gray;
`

export const MusicsHit = props => {
  const { category } = props.hit
  const lowerCategory = category.toLowerCase()
  return (
    <Wrapper>
      <InfoContainer>
        <ExtendLink to={`/${lowerCategory}/${props.hit.fields.slug}`}>
          <Title>
            <Highlight attribute="singer" hit={props.hit} tagName="mark" /> -{" "}
            <Highlight attribute="album" hit={props.hit} tagName="mark" />
          </Title>
        </ExtendLink>
        <Day>
          <Highlight attribute="date" hit={props.hit} tagName="mark" />
        </Day>
      </InfoContainer>
      <SubTitle>
        <Highlight attribute="title" hit={props.hit} tagName="mark" />
      </SubTitle>
      <Excerpt>
        <Snippet attribute="excerpt" hit={props.hit} tagName="mark" />
        ...
      </Excerpt>
    </Wrapper>
  )
}
