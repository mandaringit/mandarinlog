import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import { Theme } from "../styles/Theme"

const Container = styled.div`
  padding: 1rem;
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex-grow: 1;
  @media (min-width: 576px) {
    margin: 0 auto;
    min-width: 500px;
  }

  /* // 태블릿 디바이스 (가로 해상도가 768px 보다 큰 화면에 적용) */
  @media (min-width: 768px) {
    margin: 0 auto;
    min-width: 700px;
  }

  /* // 테스크탑 (가로 해상도가 992px 보다 큰 화면에 적용) */
  @media (min-width: 992px) {
    margin: 0 auto;
    min-width: 900px;
    max-width: 900px;
  }

  /* // 큰화면 데스크탑 (가로 해상도가 1200px 보다 큰 화면에 적용) */
  @media (min-width: 1200px) {
    margin: 0 auto;
    min-width: 900px;
    max-width: 900px;
  }
`

const Layout = props => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <>
          <Container>
            <Header />
            <Content>{props.children}</Content>
            <Footer />
          </Container>
        </>
      </>
    </ThemeProvider>
  )
}

export default Layout
