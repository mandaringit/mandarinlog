import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import { Theme } from "../styles/Theme"

const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex-grow: 1;
`

const Layout = props => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <>
          <Container>
            <Content>
              <Header />
              {props.children}
            </Content>
            <Footer />
          </Container>
        </>
      </>
    </ThemeProvider>
  )
}

export default Layout
