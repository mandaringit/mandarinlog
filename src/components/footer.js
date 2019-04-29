import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import logo from "../../static/logo.png"

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.grayColor};
  display: flex;
  justify-content: center;
  padding: 1rem;
  align-items: center;
`

const FooterText = styled.div`
  color: ${props => props.theme.mainColor};
`

const Logo = styled.div`
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  width: 30px;
  height: 30px;
  margin-right: 0.5rem;
  border-radius: 3px;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <StyledFooter>
      <Logo />
      <FooterText>
        © {data.site.siteMetadata.author}, {new Date().getFullYear()}
      </FooterText>
    </StyledFooter>
  )
}

export default Footer
