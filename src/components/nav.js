import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ExtendedNav = styled.nav`
  background-color: black;
  padding: 0.5rem;
  margin-bottom: 1rem;
`

// active 시, 색상변경
const activeClassName = "active"

const NavLink = styled(Link).attrs({ activeClassName })`
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR|Song+Myung");
  font-family: "Song Myung", serif;
  color: #888888;
  font-size: 0.9rem;
  font-weight: bold;
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
    margin-right: 1.3rem;
  }
`

const Nav = () => {
  return (
    <ExtendedNav>
      <NavList>
        <NavItem>
          <NavLink to="/">홈으로</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/opinion">오피니언</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/review">리뷰</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/code">코드</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/music">해외음악</NavLink>
        </NavItem>
      </NavList>
    </ExtendedNav>
  )
}

export default Nav
