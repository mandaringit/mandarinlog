import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import RealSearchBar from "./Search/RealSearchBar"
import { Menu } from "styled-icons/icomoon/Menu"
import logo from "../../static/logo.png"

const ExtendedNav = styled.nav`
  background-color: black;
  padding: 0;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    padding: 0.5rem;
  }
`

const NavList = styled.div`
  display: none;
  list-style-type: none;
  margin: 0;
  justify-content: center;
  @media (min-width: 300px) {
    display: ${props => (props.menuOn ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) {
    display: flex;
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

// active 시, 색상변경
const activeClassName = "active"

const NavLink = styled(Link).attrs({ activeClassName })`
  padding: 0.3rem 0.5rem;
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

// 화면 작아질때 나오는 모바일용 헤더

const SmallMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background-color: ${props => props.theme.mainColor};
  @media (min-width: 768px) {
    display: none;
  }
`

const Logo = styled.div`
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  width: 40px;
  height: 40px;
`

const ToggleButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  :focus {
    outline: none;
  }
`

const ExtendMenu = styled(Menu)`
  color: black;
  width: 2rem;
`

class Nav extends React.Component {
  state = {
    menuOn: false,
  }
  onClickHandler = () => {
    const { menuOn } = this.state
    this.setState({
      menuOn: !menuOn,
    })
  }
  render() {
    const { menuOn } = this.state
    return (
      <ExtendedNav>
        {/* 모바일용 헤더/네비 */}
        <SmallMenu>
          <Link to="/">
            <Logo />
          </Link>
          <ToggleButton visibilty={menuOn} onClick={this.onClickHandler}>
            <ExtendMenu />
          </ToggleButton>
        </SmallMenu>
        {/* 모바일 사이즈에만 menuOn의 영향을 받는다 */}
        <NavList menuOn={menuOn}>
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
          <NavItem>
            <NavLink to="/about">ABOUT</NavLink>
          </NavItem>
          <NavItem>
            <RealSearchBar />
          </NavItem>
        </NavList>
      </ExtendedNav>
    )
  }
}

export default Nav
