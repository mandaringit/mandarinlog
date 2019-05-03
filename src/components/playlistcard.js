import React from "react"
import styled from "styled-components"
import { MelonLogo, YoutubeLogo } from "../styles/icons"
import { ChevronsRight } from "styled-icons/boxicons-regular/ChevronsRight"

const PlayListCardWrapper = styled.div`
  border: 1px solid ${props => props.theme.postBorderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 100%;
  background-color: white;
`

const PlayListCardLink = styled.a`
  color: black;
  text-decoration: none;
`

const Text = styled.div`
  margin-left: 1rem;
  font-weight: bold;
`

const RightIcon = styled(ChevronsRight)`
  width: 1rem;
  color: ${props => props.theme.deepOrangeColor};
`

const PlayListCard = () => {
  const playlists = [
    {
      title: "멜론 플레이리스트 1",
      Logo: <MelonLogo />,
      link: "https://melon.do/OJTB0cVxV",
    },
    {
      title: "유튜브 플레이리스트",
      Logo: <YoutubeLogo />,
      link:
        "https://www.youtube.com/watch?v=av5JD1dfj_c&list=PLf6THeW-PKLdS6TV3JPfuH3TXySnbSQIy",
    },
  ]

  return (
    <>
      {playlists.map(playlist => (
        <PlayListCardLink key={playlist.link} href={playlist.link}>
          <PlayListCardWrapper>
            {playlist.Logo}
            <Text>{playlist.title}</Text>
            <RightIcon />
          </PlayListCardWrapper>
        </PlayListCardLink>
      ))}
    </>
  )
}

export default PlayListCard
