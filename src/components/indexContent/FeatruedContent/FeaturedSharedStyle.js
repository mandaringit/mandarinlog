import styled from "styled-components"
import { Link } from "gatsby"

export const PostGridItem = styled.div`
  overflow: hidden;
`

export const PostLinkBox = styled(Link)`
  background-color: white;
  height: 100%;
  display: block;
  text-decoration: none;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url(${props => props.imageurl});
  background-size: cover;
  background-position: center;
  :hover {
    transform: scale(1.1);
    transition-duration: 1s;
  }
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
  color: #000000;
  padding: 1rem;
  margin: 1rem 0 0 0;
  font-size: 2rem;
`
