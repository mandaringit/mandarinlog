import styled from "styled-components"

export const TemplateContainer = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.templateMaxWidth};
`
export const FeaturedImage = styled.img`
  margin: 0;
  width: 100%;
  height: 100%;
  max-height: 15rem;
  object-fit: cover;
  border-radius: 5px;
`

export const ContentContainer = styled.article`
  padding: 1rem;
`

export const Title = styled.h1`
  text-align: center;
`

export const DateContainer = styled.h5`
  font-style: italic;
  text-align: center;
  color: ${props => props.theme.barColor};
`

export const Bar = styled.div`
  border-bottom: 1px solid ${props => props.theme.barColor};
`

export const Content = styled.div`
  margin: 1rem 0;
`
