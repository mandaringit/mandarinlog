import React from "react"
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share"
import styled from "styled-components"
import NaverShareButton from "./naverShare"
import KakaoShareButton from "./kakaoShare"

const SnsShareContainer = styled.div`
  display: flex;
  height: 32px;
  margin: 1rem 0;
  justify-content: flex-end;
  > * {
    margin-left: 1rem;
    cursor: pointer;
    :focus {
      outline: none;
    }
  }
`

const AllSnsShareComp = ({ siteUrl, category, slug, title, excerpt, src }) => {
  return (
    <SnsShareContainer>
      <FacebookShareButton url={`${siteUrl}/${category}/${slug}`} quote={title}>
        <FacebookIcon size="32px" />
      </FacebookShareButton>
      <TwitterShareButton url={`${siteUrl}/${category}/${slug}`} title={title}>
        <TwitterIcon size="32px" />
      </TwitterShareButton>
      <NaverShareButton
        size="32px"
        url={`${siteUrl}/${category}/${slug}`}
        title={title}
      />
      <KakaoShareButton
        size="32px"
        url={`${siteUrl}/${category}/${slug}`}
        rooturl={siteUrl}
        title={title}
        excerpt={excerpt}
        src={src}
      />
    </SnsShareContainer>
  )
}

export default AllSnsShareComp
