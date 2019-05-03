import React from "react"
import PageLayout from "../components/Layout/pageLayout"
import SEO from "../components/SEO"
import styled from "styled-components"
import { InstagramLogo, GithubLogo, GmailLogo } from "../styles/icons"

const Wrapper = styled.div`
  padding: 3rem 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AccountWrapper = styled.div`
  margin-bottom: 2rem;
`

const SnsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5rem 0rem;
`

const ExtnedAnchor = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  min-height: 2rem;
  margin-left: 1rem;
`

const MailAddress = styled.div`
  font-size: 0.7rem;
  font-weight: bold;
  /* min-height: 2rem; */
  margin-left: 1rem;
`

const Title = styled.h3`
  margin-bottom: 0.3rem;
`
const Text = styled.p``

const About = () => {
  return (
    <PageLayout>
      <SEO
        title="ABOUT"
        description="만다린로그에 대하여"
        pathname="/about"
        keywords={["어바웃", "만다린로그"]}
      />
      <Wrapper>
        <AccountWrapper>
          <SnsWrapper>
            <InstagramLogo />
            <ExtnedAnchor href="https://www.instagram.com/_mandarinlog/">
              _mandarinlog
            </ExtnedAnchor>
          </SnsWrapper>
          <SnsWrapper>
            <GithubLogo />
            <ExtnedAnchor href="https://github.com/mandaringit">
              mandaringit
            </ExtnedAnchor>
          </SnsWrapper>
          <SnsWrapper>
            <GmailLogo />
            <div>
              <MailAddress>mandarinlog.me</MailAddress>
              <MailAddress>@gmail.com</MailAddress>
            </div>
          </SnsWrapper>
          <Text>게시글 문제 / 사이트 오류 연락 주세요.</Text>
        </AccountWrapper>
        <Title>MANDARIN</Title>
        <Text>
          <span role="img" aria-label="mandarin">
            🍊
          </span>{" "}
        </Text>
        <Title>하루종일 노래듣는걸 좋아합니다.</Title>
        <Text>
          <span role="img" aria-label="listen">
            🎧
          </span>{" "}
          Pop, Hip-hop, R&B, Electronica
        </Text>
        <Title>배우고있는 개발자입니다.</Title>
        <Text>
          <span role="img" aria-label="stack">
            📚
          </span>{" "}
          JavaScript, Node.Js, React, GraphQL
          <br />
          <span role="img" aria-label="notebook">
            💻
          </span>{" "}
          LG GRAM 14ZD970-GX50K 16GB
          <br />
          <span role="img" aria-label="os">
            ⛓
          </span>{" "}
          Ubuntu 18.04 LTS
        </Text>
      </Wrapper>
    </PageLayout>
  )
}

export default About
