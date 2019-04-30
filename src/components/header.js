import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { TitleLogo } from "../styles/icons"

const ExtendedHeader = styled.header`
  /* 기본상태는 숨김. 작은화면은 네비게이션에 있는 헤더로 대체 */
  display: none;
  padding: 0.5rem;
  background-color: #333333;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    /* 화면이 커지면 나옴 */
    display: flex;
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
        <TitleLink to="/">
          <TitleLogo width="200px" height="50px" color="#ffc107" />
        </TitleLink>
      </HeaderTitle>
    </ExtendedHeader>
  )
}

export default Header
