import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import styled from "styled-components"

const Input = styled.input`
  display: none;
`

export default connectSearchBox(({ refine, ...rest }) => (
  <form>
    <Input
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
    />
  </form>
))
