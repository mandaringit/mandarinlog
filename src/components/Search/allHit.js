import React from "react"
import { Highlight, Snippet } from "react-instantsearch-dom"
import styled from "styled-components"
import { Link } from "gatsby"

const Wrapper = styled.article``

const Fields = styled.div`
  display: flex;
  margin: 0;
  flex-wrap: wrap;
  flex-direction: column;
  font-size: 0.7rem;
`

const Title = styled.div`
  font-weight: bold;
  border-radius: 5px;
  margin-right: 0.5rem;
  font-size: 1rem;
`

const ExtendLink = styled(Link)``

const InfoContainer = styled.div`
  display: flex;
  margin: 0 0 0 0;
  align-items: center;
`

const Platform = styled.div`
  padding: 0 0.2rem;
  font-size: 0.6rem;
  margin: 0;
  margin-right: 0.5rem;
  color: gray;
`
const Stack = styled.div`
  padding: 0 0.2rem;
  font-size: 0.6rem;
  color: gray;
`

const Category = styled.div`
  color: gray;
  font-weight: bold;
  margin-right: 0.5rem;
  font-size: 0.6rem;
`

const Day = styled.div`
  color: gray;
  margin-right: 0.5rem;

  font-size: 0.6rem;
`

const SubTitle = styled.div`
  font-size: 0.7rem;
  color: gray;
`

const Excerpt = styled.div`
  font-size: 0.6rem;
  color: black;
`

export const AllHit = props => {
  const { category } = props.hit
  const lowerCategory = category.toLowerCase()

  return (
    <Wrapper>
      <Fields>
        {/* title */}
        {props.hit.singer ? (
          <Title>
            <ExtendLink to={`/${lowerCategory}/${props.hit.fields.slug}`}>
              <Highlight attribute="singer" hit={props.hit} tagName="mark" /> -{" "}
              <Highlight attribute="album" hit={props.hit} tagName="mark" />
            </ExtendLink>
          </Title>
        ) : (
          <Title>
            <ExtendLink to={`/${lowerCategory}/${props.hit.fields.slug}`}>
              <Highlight attribute="title" hit={props.hit} tagName="mark" />
            </ExtendLink>
          </Title>
        )}

        {/* Info */}
        <InfoContainer>
          <Category>{props.hit.category}</Category>
          <Day>
            <span role="img" aria-label="date">
              📝
            </span>{" "}
            {props.hit.date}
          </Day>

          {props.hit.category === "MOVIE" ? (
            <Platform>
              <span role="img" aria-label="video">
                🎬
              </span>{" "}
              <Highlight attribute="platform" hit={props.hit} tagName="mark" />
            </Platform>
          ) : null}

          {props.hit.category === "GAME" ? (
            <Platform>
              <span role="img" aria-label="game">
                🕹
              </span>{" "}
              <Highlight attribute="platform" hit={props.hit} tagName="mark" />
            </Platform>
          ) : null}

          {props.hit.category === "CODE" ? (
            <Stack>
              <span role="img" aria-label="stack">
                📚
              </span>{" "}
              <Highlight attribute="stacks" hit={props.hit} tagName="mark" />
            </Stack>
          ) : null}
        </InfoContainer>
      </Fields>

      {/* Music 부제목 */}
      {props.hit.category === "MUSIC" ? (
        <SubTitle>
          <Highlight attribute="title" hit={props.hit} tagName="mark" />
        </SubTitle>
      ) : null}
      {/* 발췌부분 */}
      <Excerpt>
        <Snippet attribute="excerpt" hit={props.hit} tagName="mark" />
        ...
      </Excerpt>
    </Wrapper>
  )
}
