import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { NavigateNext } from "styled-icons/material/NavigateNext"

export const Wrapper = styled.div`
  background-color: ${props => (props.color ? props.color : "")};
  padding: 1rem 0.5rem 1rem 0.5rem;
`

export const MainPostWrapper = styled.div`
  margin: 0 auto;
  max-width: 1080px;
`
export const MainTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: ${props => (props.title === "해외음악" ? "white" : "black")};
`

export const MainTitleWrapper = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.postBorderColor};
  display: flex;
  justify-content: space-between;
`

export const MainTitleLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
`

export const NextIcon = styled(NavigateNext)`
  width: 1rem;
  /* height: 1rem; */
`

export const MainTitleBar = ({ icon, label, title, route }) => {
  return (
    <MainTitleWrapper>
      <MainTitle title={title}>
        <span role="img" aria-label={label}>
          {icon}
        </span>{" "}
        {title}
      </MainTitle>
      {route === "/" ? null : (
        <MainTitleLink to={route}>
          <NextIcon />
          <div>더보기</div>
        </MainTitleLink>
      )}
    </MainTitleWrapper>
  )
}

export const Posts = styled.div`
  margin: 0;
  display: grid;
  grid-gap: 0.3rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: minmax(13rem, 1fr);
`

export const Post = styled.article`
  width: 100%;
  background-color: none;
  border-radius: 3px;
`

export const PostLinkBox = styled(Link)`
  border-radius: 3px;
  text-decoration: none;
  color: black;
`

export const FeaturedImage = styled.div`
  background-color: white; /* fallback */
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, #000 100%),
    url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 3px;
  margin-bottom: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 15rem;
`

export const Title = styled.span`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  padding: 1rem;
`

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
`
