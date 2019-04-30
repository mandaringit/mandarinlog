import styled from "styled-components"
import { Link } from "gatsby"

export const PostGridItem = styled.div`
  overflow: hidden;
  border-radius: 3px;
`

export const PostLinkBox = styled(Link)`
  background-color: white;
  height: 100%;
  display: block;
  text-decoration: none;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, #000 100%),
    url(${props => props.imageurl});
  background-size: cover;
  background-position: center;
  /* :hover {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, #000 100%),
      url(${props => props.imageurl});
    transition-duration: 1s;
  } */
`

export const InfoBox = styled.div`
  padding: 1rem;
  height: 100%;
`

export const Bagde = styled.div`
  color: ${props => props.theme.mainColor};
  background-color: black;
  display: inline;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0 0.3rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  color: white;
  padding: 1rem;
  margin: 1rem 0 0 0;
  font-size: 1.5rem;
  text-align: center;
`
