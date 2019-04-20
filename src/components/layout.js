import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import { Theme } from "../styles/Theme"

const Container = styled.div`
  /* padding: 1rem; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
`

const Content = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  max-width: 95vw;
  min-width: 95vw;
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
