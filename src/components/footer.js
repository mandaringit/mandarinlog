import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.grayColor};
  display: flex;
  justify-content: center;
`

const FooterText = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR|Song+Myung");
  font-family: "Song Myung", serif;
  padding: 1rem;
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
