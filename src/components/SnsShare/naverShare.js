import React from "react"
import { NaverLogo } from "../../styles/icons"

const NaverShareButton = ({ url, title, size }) => {
  const naverShare = () => {
    const encodeUrl = encodeURI(url)
    const encodeTitle = encodeURI(title)
    window.open(
      `https://share.naver.com/web/shareView.nhn?url=${encodeUrl}&title=${encodeTitle}`,
      "네이버에 공유하기",
      "width = 500, height = 600"
    )
  }
  return (
    <div onClick={naverShare}>
      <NaverLogo size={size} />
    </div>
  )
}

export default NaverShareButton
