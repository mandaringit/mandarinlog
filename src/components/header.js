import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const ExtendedHeader = styled.header`
  padding: 1rem;
  background-color: #333333;
`

const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
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
    </ExtendedHeader>
  )
}

export default Header
