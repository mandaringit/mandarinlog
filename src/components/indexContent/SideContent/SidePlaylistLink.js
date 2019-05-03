import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { ChevronsRight } from "styled-icons/boxicons-regular/ChevronsRight"
import { Playlist } from "styled-icons/boxicons-solid/Playlist"

const ExtendLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const SideBox = styled.div`
  border: 1px solid ${props => props.theme.postBorderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`

const Text = styled.div`
  margin-right: 1rem;
`

const PlayListIcon = styled(Playlist)`
  width: 1.5rem;
  margin-right: 1rem;
`

const RightIcon = styled(ChevronsRight)`
  width: 1rem;
  color: ${props => props.theme.deepOrangeColor};
`

const SidePlayListLink = () => {
  return (
    <ExtendLink to="/playlist">
      <SideBox>
        <PlayListIcon />
        <Text>플레이리스트</Text>
        <RightIcon />
      </SideBox>
    </ExtendLink>
  )
}

export default SidePlayListLink
