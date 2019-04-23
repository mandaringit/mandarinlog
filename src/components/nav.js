import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const ExtendedNav = styled.nav`
  background-color: black;
  padding: 0.5rem;
  margin-bottom: 1rem;
`

// active 시, 색상변경
const activeClassName = "active"

const NavLink = styled(Link).attrs({ activeClassName })`
  @import url("https://fonts.googleapis.com/css?family=Merriweather");
  font-family: "Merriweather", serif;
  color: #888888;
  font-size: 0.9rem;
  font-weight: bold;
  margin-right: 1.3rem;
  text-decoration: none;
  :hover {
    color: ${props => props.theme.mainColor};
  }
  &.${activeClassName} {
    color: white;
    border-bottom: 1px solid white;
  }
`

const NavList = styled.div`
  display: flex;
  justify-content: center;
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

const NavItem = styled.div`
  @media (min-width: 300px) {
    margin: 0.5rem;
  }
  @media (min-width: 768px) {
    margin: 0;
  }
`

const Nav = () => {
  return (
    <ExtendedNav>
      <NavList>
        <NavItem>
          <NavLink to="/">HOME</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/opinion">OPINION</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/review">REVIEW</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/code">CODE</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/music">MUSIC</NavLink>
        </NavItem>
      </NavList>
    </ExtendedNav>
  )
}

export default Nav
