import React from "react"
import Header from "./header"
import Footer from "./footer"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import { Theme } from "../styles/Theme"

const Layout = props => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <>
          <div>
            <Header />
            {props.children}
            <Footer />
          </div>
        </>
      </>
    </ThemeProvider>
  )
}

export default Layout
