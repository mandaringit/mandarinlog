import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  background-color: ${props => (props.color ? props.color : "")};
  padding: 2rem 0;
`

export const MainPostWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

export const MainTitleLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.mainColor};
  background-color: black;
  padding: 0.5rem 1rem;
`

export const MainTitle = styled.h3``
