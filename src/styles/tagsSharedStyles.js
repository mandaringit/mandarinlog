import styled from "styled-components"

export const PlatformBadge = styled.h4`
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  margin: 0.5rem;
  border-radius: 3px;
  color: ${props => props.theme.platformColor};
  background-color: #141414;
`

export const TagContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`

export const Tag = styled.h6`
  background-color: ${props => props.theme.deepOrangeColor};
  color: white;
  padding: 0.2rem 0.3rem;
  margin: 0 0.3rem 0 0;
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 3px;
`
