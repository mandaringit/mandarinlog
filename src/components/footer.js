import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledFooter = styled.footer`
  margin-top: 3rem;
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
      <p>
        Created By {data.site.siteMetadata.author}, © {new Date().getFullYear()}
      </p>
    </StyledFooter>
  )
}

export default Footer
