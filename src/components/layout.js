import React from "react"
import Header from "./header"
import Footer from "./footer"
import Nav from "./nav"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import { Theme } from "../styles/Theme"
import SupportCaution from "./supportCaution"

const Container = styled.div`
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
  let agent = window.navigator.userAgent.toLowerCase()
  let caution = false
  if (
    (window.navigator.appName == "Netscape" &&
      window.navigator.userAgent.search("Trident") != -1) ||
    agent.indexOf("msie") != -1
  ) {
    caution = true
  }

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <>
          <Container>
            {caution ? <SupportCaution /> : null}
            <Header />
            <Nav />
            <Content>{props.children}</Content>
            <Footer />
          </Container>
        </>
      </>
    </ThemeProvider>
  )
}

export default Layout
