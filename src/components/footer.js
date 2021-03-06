import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

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
      <FooterText>
        © {data.site.siteMetadata.author}, {new Date().getFullYear()}
      </FooterText>
    </StyledFooter>
  )
}

export default Footer
