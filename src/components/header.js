import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const ExtendedHeader = styled.header`
  padding: 1rem;
  background-color: white;
`

const HeaderTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Merriweather");
  font-family: "Merriweather", serif;
  margin: 0;
  @media (min-width: 300px) {
    font-size: 2rem;
    text-align: center;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
    text-align: start;
  }
`

const TitleLink = styled(Link)`
  color: #ffc107;
  text-decoration: none;
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <ExtendedHeader>
      <HeaderTitle>
        <TitleLink to="/">🍊{data.site.siteMetadata.title}</TitleLink>
      </HeaderTitle>
    </ExtendedHeader>
  )
}

export default Header
