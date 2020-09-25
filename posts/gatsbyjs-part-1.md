---
title: 'Gatsby.js로 블로그 만들기 정리 part1'
date: '2020-09-25'
path: 'make-blog-with-gatsbyjs-part-1'
---

# Gatsby.js로 블로그 만들기 정리

약 1년전에 Gatsby.js로 블로그를 만들었었는데 당시엔 이렇게하면 이렇게 되는구나 정도만 파악하고 꾸역꾸역 블로그를 만들었던 기억이 난다. 그래도 그때는 내가 이렇게 만들 수 있구나 라는 사실에 굉장히 만족해하던 기억이 난다.

블로그 개발 덕분인지 얼마 안가 SSAFY에 합격할 수 있었고, 개발하는 방법에 대해 많은 도움을 받을 수 있었다. 이제 다시 돌아와 이를 정리하면서 TS연습 겸 블로그를 다시 만들어 보려고 한다.

참고로 초기 설정은 [벨로그/이찬희님의 글](https://velog.io/@iamchanii/build-a-blog-with-gatsby-and-typescript-part-1)을 많이 참고했다. 아직은 타입스크립트가 익숙하지 않아 많은 도움을 받았다.

## Gatsby.js에서 주요 개념

### 기본적인 구조

[pages-layout 참고](https://www.gatsbyjs.com/docs/recipes/pages-layouts/)

- `gatsby-config.js` — 프로젝트 타이틀, 설명, 플러그인 등의 Gatsby 사이트의 설정 옵션(configure options).
- `gatsby-node.js` — 빌드 프로세스에 영향을 미치는 기본 설정을 커스터마이즈하고 확장하기 위해 Gatsby의 Node.js API를 구현하기 위해 사용.
- `gatsby-browser.js` — Gatsby의 브라우저 API를 사용하여 브라우저에 영향을 미치는 기본 설정을 커스터마이즈 및 확장
- `gatsby-ssr.js` — Gatsby의 서버사이드 렌더링 API를 사용하여 서버사이드 렌더링에 영향을 미치는 기본 설정을 커스터마이징

`gatsby-config.js`는 웹팩 설정 파일이나 바벨 설정파일처럼 Gatsby.js의 플러그인과 같은 것들을 설정하는 파일이고 이를 제외하고는 모두 Gatsby.js에서 각각 node, browser, ssr API를 커스터마이즈 하기 위해 사용되는 파일들이라고 봐도 될것 같다.

### Page 자동으로 만들기

Gatsby core는 `src/pages` 폴더에 있는 리액트 컴포넌트를 자동으로 페이지로 바꿔준다.
기본적으로 `index.js`는 `/`로, 그 외에 `about.js`는 `/about`이 되는 것처럼 파일명이 해당 라우터가 된다.

### 페이지간의 링킹

리액트에서 `react-router-dom`의 `Link` 컴포넌트를 썼던 것처럼 `gatsby`의 `Link`컴포넌트를 사용하면 된다.

### 레이아웃 구성하기

기본적인 틀을 만들어 이를 계속해서 활용하고 내부 컨텐츠만 바꾸려면 레이아웃을 만들어 재활용하는것도 좋은 선택이라고 보인다. React의 인자로 넘어오는 `children`속성을 활용하면 이를 쉽게 구성할 수 있다.

### [style 사용하기](https://www.gatsbyjs.com/docs/recipes/styling-css/)

전역에 스타일링, Layout에 스타일링하는 등 방법은 많다. 또한 플러그인을 통해 styled-components, css-module, emotion 등 다양한 라이브러리로 스타일링이 가능하다.
