import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  background-color: ${props => (props.color ? props.color : "")};
  padding: 1rem 0.5rem;
`

export const MainPostWrapper = styled.div`
  margin: 0 auto;
  max-width: 1080px;
`

export const MainTitleLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.mainColor};
  background-color: black;
  padding: 0.5rem 1rem;
`

export const MainTitle = styled.h3``

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
  /* margin: 2rem; */
  /* background-color: rgba(255, 193, 7, 0.3); */
`
