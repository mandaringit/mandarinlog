import styled from "styled-components"

export const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0.3rem 0;
`

export const StackBadge = styled.h6`
  display: flex;
  margin: 0 0.5rem 0 0;
  font-size: 0.7rem;
  font-weight: bold;
  color: ${props => props.theme.stackColor};
  background-color: ${props => props.theme.stackBackColor};
  padding: 0.1rem 0.2rem;
`
