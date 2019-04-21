import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledFooter = styled.footer`
  margin-top: 3rem;
  background-color: ${props => props.theme.mainColor};
  display: flex;
  justify-content: center;
`

const FooterText = styled.div`
  padding: 1rem;
  color: white;
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
