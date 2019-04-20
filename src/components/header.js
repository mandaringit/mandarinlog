import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const ExtendedHeader = styled.header`
  padding: 1rem 2rem 1rem 2rem;
`

const HeaderTitle = styled.h1``

const ExtendedNav = styled.nav`
  margin: 1rem 0;
`

// active 시, 색상변경
const activeClassName = "active"

const NavLink = styled(Link).attrs({ activeClassName })`
  @import url("https://fonts.googleapis.com/css?family=Merriweather");
  font-family: "Merriweather", serif;
  color: #999999;
  font-size: 0.9rem;
  font-weight: bold;
  margin-right: 1.3rem;
  text-decoration: none;
  :hover {
    color: #666666;
  }
  &.${activeClassName} {
    color: #333333;
    border-bottom: 1px solid black;
  }
`

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  @media (min-width: 300px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const NavItem = styled.li`
  margin: 0;
`

const TitleLink = styled(Link)`
  @import url("https://fonts.googleapis.com/css?family=Merriweather");
  font-family: "Merriweather", serif;
  color: ${props => props.theme.mainColor};
  text-decoration: none;
  @media (min-width: 300px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <ExtendedHeader>
      <HeaderTitle>
        <TitleLink to="/">{data.site.siteMetadata.title}</TitleLink>
      </HeaderTitle>
      <ExtendedNav>
        <NavList>
          <NavItem>
            <NavLink to="/">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/opinion">OPINION</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/music">POP</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/game">GAME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/movie">MOVIE</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/code">CODE</NavLink>
          </NavItem>
        </NavList>
      </ExtendedNav>
    </ExtendedHeader>
  )
}

export default Header
