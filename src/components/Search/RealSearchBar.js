import React from "react"
import { navigate } from "@reach/router"
import styled from "styled-components"
import { Search } from "styled-icons/fa-solid/Search"

const Form = styled.form`
  margin: 0;
  border: 2px solid ${props => props.theme.mainColor};
  border-radius: 3px;
`

const Input = styled.input`
  background-color: transparent;
  width: 4rem;
  border: none;
  color: white;
  padding: 0.1rem 0.5rem;
  font-size: 0.8rem;
  :focus {
    outline: none;
    width: 10rem;
    transition: width 1s;
  }
  ::placeholder {
    color: gray;
    text-align: center;
    font-size: 0.8rem;
  }
`
const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
`

const ExtendSearchIcon = styled(Search)`
  width: 1rem;
  color: ${props => props.theme.mainColor};
`

class RealSearchBar extends React.Component {
  state = {
    search: "",
  }
  onSubmit = e => {
    const { search } = this.state
    e.preventDefault()
    if (search.length > 0) {
      navigate(`/search?query=${search}`)
    } else {
      alert("검색어는 한글자 이상이어야합니다.")
    }
    this.setState({
      search: "",
    })
  }
  onChange = e => {
    this.setState({
      search: e.target.value,
    })
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Input
          type="text"
          placeholder={"검색"}
          value={this.state.search}
          onChange={this.onChange}
        />
        <Button type="submit">
          <ExtendSearchIcon />
        </Button>
      </Form>
    )
  }
}

export default RealSearchBar
