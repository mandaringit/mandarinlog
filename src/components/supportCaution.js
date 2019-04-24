import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

const Alert = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`
const Content = styled.div`
  margin-bottom: 1rem;
`
const RedContent = styled.div`
  margin-bottom: 1rem;
  color: red;
  font-weight: bold;
`

const SupportCaution = () => {
  return (
    <Container>
      <Alert># 미지원 브라우저입니다. #</Alert>
      <Content>
        만다린로그는 인터넷 익스플로러(Internet Explorer)에서는
        <strong>컨텐츠가 제대로 표시되지 않을 수 있습니다.</strong>
      </Content>
      <RedContent>
        크롬 브라우저 또는 Microsoft 엣지와 같은 최신 브라우저를 이용해주세요.
      </RedContent>
      <Content>
        다른 브라우저가 설치되어 있지 않다면 아래 링크를 클릭해 브라우저를
        설치해 주세요.
      </Content>
      <a href="https://www.google.com/intl/ko_ALL/chrome/">
        구글 크롬 브라우저 설치(클릭시 크롬 설치 페이지로 이동합니다.)
      </a>
    </Container>
  )
}

export default SupportCaution
