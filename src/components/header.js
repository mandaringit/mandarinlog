import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

// active 시, 색상변경
const activeClassName = "active"

const NavLink = styled(Link).attrs({ activeClassName })`
  color: #999999;
  font-size: 0.9rem;
  margin-right: 1.3rem;
  text-decoration: none;
  :hover {
    color: #666666;
  }
  &.${activeClassName} {
    color: #333333;
  }
`

const ExtendedHeader = styled.header`
  padding: 1rem 0 3rem;
`

const TitleLink = styled(Link)`
  color: ${props => props.theme.mainColor};
  font-size: 3rem;
  text-decoration: none;
`

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
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
      <h1>
        <TitleLink to="/">{data.site.siteMetadata.title}</TitleLink>
      </h1>
      <nav>
        <NavList>
          <li>
            <NavLink to="/">홈</NavLink>
          </li>
          <li>
            <NavLink to="/opinion">오피니언</NavLink>
          </li>
          <li>
            <NavLink to="/music">뮤직</NavLink>
          </li>
          <li>
            <NavLink to="/game">게임</NavLink>
          </li>
          <li>
            <NavLink to="/code">코드</NavLink>
          </li>
          <li>
            <NavLink to="/etc">ETC</NavLink>
          </li>
        </NavList>
      </nav>
    </ExtendedHeader>
  )
}

export default Header
