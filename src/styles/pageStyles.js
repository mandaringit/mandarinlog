import styled from "styled-components"
import { Link } from "gatsby"
// 이하 전부 포스트 안의 내용이 아닌
// 페이지에 나타나는 포스트의 스타일이다.

export const PageWrapper = styled.div`
  margin: 1rem auto;
  max-width: 1080px;
`

// 카테고리 타이틀
export const CategoryTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const Posts = styled.div`
  margin: 0;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-auto-rows: auto;
`

export const Post = styled.article`
  background-color: ${props => props.theme.postBackgroundColor};
  border: 1px solid ${props => props.theme.postBorderColor};
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`

// 각 포스트를 감싸는 박스 겸 링크
export const PostLinkBox = styled(Link)`
  color: black;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

export const FeaturedImage = styled.div`
  /* 이미지 정렬 */
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  min-height: 8rem;
  border-radius: 3px 3px 0 0;
  opacity: 0.8;
  :hover {
    opacity: 1;
    transition-duration: 1s;
  }
  /* 이미지 내부 뱃지 정렬 */
  display: flex;
  justify-content: start;
  align-items: start;
`

export const InfoBox = styled.div`
  padding: 0.5rem 1rem;
`

// 각 포스트 타이틀
export const Title = styled.h4`
  margin-bottom: 0.3rem;
`

// 각 포스트의 날짜
export const DateContainer = styled.div`
  color: ${props => props.theme.barColor};
  font-size: 0.7rem;
  margin-bottom: 0.3rem;
`
// 각 포스트의 발췌 부분
export const Excerpt = styled.p`
  color: black;
  font-size: 0.7rem;
  margin: 0.5rem 0;
`

// 포스트 안의 구분을 위한 바
export const Bar = styled.div`
  border-bottom: 1px solid ${props => props.theme.barColor};
  width: 100%;
`
