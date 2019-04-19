import styled from "styled-components"
import { Link } from "gatsby"
// 이하 전부 포스트 안의 내용이 아닌
// 페이지에 나타나는 포스트의 스타일이다.

// 각 포스트 타이틀
export const Title = styled.h3`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

// 포스트 대표 이미지
export const FeaturedImage = styled.img`
  margin: 0;
  width: 100%;
  height: 15rem;
  object-fit: cover;
`

// 각 포스트의 날짜
export const DateContainer = styled.div`
  color: ${props => props.theme.thinMainColor};
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
`
// 각 포스트의 발췌 부분
export const Excerpt = styled.p`
  color: black;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`

// 포스트 안의 구분을 위한 바
export const Bar = styled.div`
  border-bottom: 1px solid ${props => props.theme.barColor};
`

// 각 포스트를 감싸는 박스 겸 링크
export const PostLinkBox = styled(Link)`
  background-color: white;
  color: #000000;
  display: block;
  /* padding: 1rem; */
  text-decoration: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  :hover {
    background: ${props => props.theme.hoverColor};
    transition-duration: 1s;
  }
`

export const InfoBox = styled.div`
  padding: 1rem;
`
