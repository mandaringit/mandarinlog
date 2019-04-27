import styled from "styled-components"

export const PlatformBadge = styled.div`
  font-weight: bold;
  padding: 0 0.5rem;
  margin: 0.5rem;
  border-radius: 5px;
  color: ${props => {
    if (props.platform === "Netflix") {
      return "#e52811"
    } else if (props.platform === "Theater") {
      return "#FFC107"
    } else {
      return "white"
    }
  }};
  background-color: #141414;
  margin-bottom: 1rem;
`

export const TagContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`

export const Tag = styled.div`
  background-color: ${props => props.theme.deepOrangeColor};
  color: white;
  padding: 0 0.3rem;
  margin-right: 0.3rem;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 3px;
`
