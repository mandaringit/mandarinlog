import React from "react"
import PageLayout from "../components/Layout/pageLayout"
import SEO from "../components/SEO"
import styled from "styled-components"
import PlayListCard from "../components/playlistcard"
import { CategoryTitle } from "../styles/pageStyles"

const Wrapper = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PlayListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-gap: 1rem;
`
const Explain = styled.div`
  margin: 0 0 1rem 0;
`

const Text = styled.div`
  font-size: 0.8rem;
`

const PlaylistPage = () => {
  return (
    <PageLayout>
      <SEO
        title="PLAYLIST"
        description="만다린로그 플레이리스트"
        pathname="/playlist"
        keywords={["playlist", "music", "만다린로그"]}
      />
      <Wrapper>
        <CategoryTitle>
          <span role="img" aria-label="music">
            🎼
          </span>
          플레이리스트
        </CategoryTitle>
        <Explain>
          <Text>
            해외음악 페이지의 음악을 플레이리스트
            <span role="img" aria-label="list">
              📃
            </span>
            로 만들었습니다.
          </Text>
          <Text>노래는 계속해서 추가할 예정입니다.</Text>
          <Text>
            오류나 빠진곡은{" "}
            <span role="img" aria-label="mail">
              📧
            </span>
            mandarinlog.me@gmail.com으로 메일 부탁드립니다.
          </Text>
        </Explain>
        <PlayListGrid>
          <PlayListCard />
        </PlayListGrid>
      </Wrapper>
    </PageLayout>
  )
}

export default PlaylistPage
