import styled from "styled-components"

export const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const StackBadge = styled.div`
  margin: 0.5rem 0.5rem 0.5rem 0;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0 0.5rem;
  border-radius: 5px;
  background-color: ${props => {
    if (props.stack === "NodeJs") {
      return "#216E00"
    } else if (props.stack === "JavaScript") {
      return "#F7DF1E"
    } else if (props.stack === "Prisma") {
      return "#0F334B"
    } else if (props.stack === "GraphQL") {
      return "#E31CA4"
    } else if (props.stack === "React") {
      return "#61DAFB"
    } else if (props.stack === "Go") {
      return "#375DAB"
    } else {
      return "white"
    }
  }};
`
