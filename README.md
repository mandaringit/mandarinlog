# 개츠비를 이용한 블로그 만들기

## (.md)컨텐츠별 필수 항목

### LOG

```text
---
title: "제목"
date : "2019-05-03"
category: "LOG"
featuredImage: "./cover.jpg"
platform: "브랜드 혹은 메이커, 회사"
subCategory: "영화,게임,애니메이션 등"
star: 4 (=> 0은 스타표시 없음, 1~5는 스타표시 생성)
tags: ["태그1","태그2","태그3"]
keywords: ["키워드1","키워드2","키워드3"]
---
```

### MUSIC

```text
---
title: "음악 제목"
album: "앨범 이름"
singer: "가수 이름"
albumCategory: "정규" (정규,EP,싱글)
date : "2019-01-01"
category: "MUSIC"
featuredImage: "경로"
translation: Boolean => true 또는 false
keywords: ["키워드1","키워드2","키워드3"]
---
```

### CODE

```text
---
title: "제목"
date : "2019-01-01"
category: "CODE"
featuredImage: "경로"
stacks:["스택1","스택2","스택3"]
keywords: ["키워드1","키워드2","키워드3"]
---
```