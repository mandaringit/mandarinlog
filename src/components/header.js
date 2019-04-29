import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import RealSearchBar from "./Search/RealSearchBar"

const ExtendedHeader = styled.header`
  padding: 1rem;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 500px) {
    flex-direction: row;
  }
`

const HeaderTitle = styled.div`
  display: flex;
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem;
  @media (min-width: 500px) {
    margin-bottom: 0;
  }
`

const TitleLink = styled(Link)`
  color: ${props => props.theme.mainColor};
  text-decoration: none;
`

const Header = () => {
  return (
    <ExtendedHeader>
      <HeaderTitle>
        <TitleLink to="/">mandarinlog</TitleLink>
      </HeaderTitle>
      <RealSearchBar />
    </ExtendedHeader>
  )
}

export default Header
