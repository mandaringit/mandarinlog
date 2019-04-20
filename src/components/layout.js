import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import { Theme } from "../styles/Theme"

const Container = styled.div`
  padding: 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (min-width: 300px) {
    max-width: 100vw;
  }

  /* // 태블릿 디바이스 (가로 해상도가 768px 보다 큰 화면에 적용) */
  @media (min-width: 768px) {
    max-width: 90vw;
  }
`

const Content = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 90vw;
  min-width: 90vw;
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
