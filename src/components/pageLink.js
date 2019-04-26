import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const ExtendLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.mainColor};
  background-color: ${props => {
    if (props.currentPage === props.linkNumber) {
      return "black"
    } else {
      return "#999999"
    }
  }};
  padding: 0.1rem 0.5rem;
  font-weight: bold;
  border: 1px solid ${props => props.theme.postBorderColor};
  border-radius: 3px;
  :hover {
    background-color: black;
    transition-duration: 0.5s;
  }
  margin-right: 1rem;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
`

const PageLink = data => {
  const items = []
  for (let i = 1; i <= data.numPages; i++) {
    if (i === 1) {
      items.push(
        <ExtendLink
          currentPage={data.currentPage}
          linkNumber={i}
          key={i}
          to={`/${data.route}`}
        >
          {i}
        </ExtendLink>
      )
    } else {
      items.push(
        <ExtendLink
          currentPage={data.currentPage}
          linkNumber={i}
          key={i}
          to={`/${data.route}/page/${i}`}
        >
          {i}
        </ExtendLink>
      )
    }
  }
  return <LinkContainer>{items.map(item => item)}</LinkContainer>
}

export default PageLink
