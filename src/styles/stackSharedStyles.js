import styled from "styled-components"

export const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`

export const StackBadge = styled.div`
  display: flex;
  margin-right: 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0 0.5rem;
  border-radius: 5px;
  background-color: ${props => props.theme.stackColor};
`
