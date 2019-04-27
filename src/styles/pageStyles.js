import styled from "styled-components"
import { Link } from "gatsby"
// 이하 전부 포스트 안의 내용이 아닌
// 페이지에 나타나는 포스트의 스타일이다.

export const Posts = styled.div`
  margin: 0;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  grid-auto-rows: minmax(20rem, 1fr);
`

export const Post = styled.article`
  width: 100%;
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
  height: 100%;
`

// 카테고리 타이틀
export const CategoryTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Black+Han+Sans");
  font-family: "Black Han Sans", sans-serif;
  font-weight: 100;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export const FeaturedImage = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 3px 3px 0 0;
  margin: 0;
  width: 100%;
  min-height: 8rem;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  :hover {
    opacity: 1;
    transition-duration: 1s;
  }
  display: flex;
  justify-content: start;
  align-items: start;
`

export const InfoBox = styled.div`
  padding: 1rem;
`

// 각 포스트 타이틀
export const Title = styled.h3`
  margin-bottom: 0;
`

// 각 포스트의 날짜
export const DateContainer = styled.div`
  color: ${props => props.theme.barColor};
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
`
// 각 포스트의 발췌 부분
export const Excerpt = styled.p`
  color: black;
  font-size: 0.8rem;
  margin: 0.5rem 0;
`

// 포스트 안의 구분을 위한 바
export const Bar = styled.div`
  border-bottom: 1px solid ${props => props.theme.barColor};
  width: 100%;
`
