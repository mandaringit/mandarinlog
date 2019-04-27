import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const ExtendedHeader = styled.header`
  padding: 1rem;
  background-color: #333333;
`

const HeaderTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Black+Han+Sans");
  font-family: "Black Han Sans", sans-serif;
  margin: 0;
  font-size: 2rem;
  text-align: center;
  font-weight: 100;
`

const TitleLink = styled(Link)`
  color: ${props => props.theme.mainColor};
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
        <TitleLink to="/">{data.site.siteMetadata.title}</TitleLink>
      </HeaderTitle>
    </ExtendedHeader>
  )
}

export default Header
