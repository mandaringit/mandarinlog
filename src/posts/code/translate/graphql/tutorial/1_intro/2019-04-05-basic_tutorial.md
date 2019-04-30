---
title: "GRAPHQL FUNDAMENTALS #1 기본 튜토리얼 - 소개"
date : "2019-04-05"
category: "CODE"
featuredImage: "../cover.png"
stacks: ["번역","GraphQL","NodeJs"]
keywords: ["GraphQL","NodeJs","CODE"]
---

[How To GraphQL? GRAPHQL FUNDAMENTALS - #1 Introduction](https://www.howtographql.com/basics/0-introduction/)의 번역본입니다.

> API는 소프트웨어 인프라구조의 유비쿼터스(언제어디든 존재하는) 구성 요소가 되었습니다. 즉, **API**는 "**클라이언트**가 **서버**에서 데이터를 로드하는 방법"을 정의합니다.

그 중심에서, GraphQL은 클라이언트가 API에서 필요로 하는 데이터만을 정확히 지정할 수 있는 *선언적 데이터 가져오기(declarative data fetching)*를 가능하게 합니다. 고정 데이터구조를 반환하는 여러 엔드포인트를 반환하는 대신, GraphQL서버는 단일 엔드포인트를 노출하고 클라이언트가 요청한 데이터로 정확하게 응답합니다.

## **GraphQL - A Query Language for APIs**

오늘날 대부분의 앱은 데이터가 데이터베이스에 저장되는 서버에서 데이터를 가져와야 한다. 
애플리케이션의 요구에 맞는 저장된 데이터에 대한 인터페이스를 제공하는 것은 API의 역할이다. 

GraphQL은 종종 데이터베이스 기술과 혼동된다. 이것은 오해다. GraphQL은 API의 질의 언어(*query language*)다 ㅡ 데이터베이스가 아니다.  그런 점에서 그것은 데이터베이스에 구애받지 않고 API를 사용하는 어떤 상황(context)에서든 효과적으로 사용될 수 있다.

## **A more efficient Alternative to REST**

> 💡 Learn more about the top reasons to use GraphQL in [this](https://www.prisma.io/blog/top-5-reasons-to-use-graphql-b60cfa683511) blog post.

[REST](https://ko.wikipedia.org/wiki/REST)는 서버의 데이터를 노출하는데 널리 사용되고 있다. REST의 개념이 개발되었을 때, 클라이언트 앱은 비교적 단순했고 개발속도는 현재와 같이 빠르지 않았다. 따라서 REST는 많은 앱에 적합했다.
그러나, API 환경은 지난 몇 년간 급격히 변화해왔다. 특히 API 설계 방식에 변화를 요구하는 세 가지 요소가 있다.

## **1. 모바일 사용 증가로 효율적인 데이터 로드가 필요하다.**

Facebook이 GraphQL을 개발한 초기 원인은 모바일 사용 증가, 저전력 장치 및 엉성한 네트워크 때문이었다. GraphQL은 네트워크를 통해 전송해야 할 데이터 양을 최소화하여 이러한 조건에서 작동하는 앱을 크게 개선할 수 있었다.

## **2. 다양한 프런트엔드 프레임워크 및 플랫폼**

클라이언트 애플리케이션을 실행하는 프런트엔드 프레임워크와 플랫폼의 이기종(heterogeneous) 환경은 모든 요구 사항에 맞는 하나의 API를 구축하고 유지하기가 어렵게 만들었다. GraphQL을 통해 각 클라이언트는 필요한 데이터에 정확하게 액세스할 수 있다.

## **3. 빠른 개발 및 신속한 기능 개발에 대한 기대**

지속적인 배포(deployment)는 많은 회사의 표준이 되었고, 빠른 반복(iterations)과 빈번한 제품 업데이트는 필수적이 되었다. REST API를 사용하면 서버에서 데이터가 노출되는 방식을 클라이언트 측의 특정 요구 사항 및 설계 변경 사항을 고려하여 수정해야 하는 경우가 많다. 이것은 빠른 개발 관행과 제품 반복(product iterations)을 방해한다.

## **GraphQL은 리액트 개발자만을 위한것이 아니다.**

페이스북은 2012년에 그들의 네이티브 모바일 앱에서 GraphQL을 사용하기 시작했다. 그러나 흥미롭게도 GraphQL은 대부분 웹 기술 분야에서 사용하기 위해 채택되었으며 네이티브 모바일 공간에서는 거의 견인력을 얻지 못했다.

페이스북이 GraphQL에 대해 처음으로 공개적으로 언급한 것은 [React.js Conf 2015](https://www.youtube.com/watch?v=9sc8Pyc51uU)에서 였고, 오픈소스 계획([plans to open source](https://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html))을 발표한 직후였다. 페이스북은 항상 React의 맥락(context)에서 GraphQL에 대해 말하곤 했기 때문에, React와 함께 사용하도록 제한되는 기술이 결코 아니라는 것을 이해하는데 시간이 걸렸다.

## **급격하게 성장하는 커뮤니티**

사실, GraphQL은 클라이언트가 API로 통신하는 모든 곳에서 사용할 수 있는 기술이다. 흥미롭게도, Netflix나 Coursera와 같은 다른 회사들은 API 상호 작용을 더 효율적으로 만들기 위해 비교 가능한 아이디어를 연구하고 있었다. Coursera는 고객이 데이터 요구사항을 명시하고 Netflix는 Falcor라고 하는 솔루션을 오픈 소스화하도록 하는 유사한 기술을 구상했다. GraphQL을 오픈소스화 한 후(open-sourced), Coursera는 그들의 노력을 완전히 취소하고 GraphQL 열차에 올라탔다.

오늘날 GitHub, Twitter, Yelp, Shopify와 같은 여러 회사([lots of different companies](http://graphql.org/users/))에서 GraphQL을 생산하는데 사용하고 있다.

*Despite being such a young technology, GraphQL has already been widely adopted. Learn [who else](http://graphql.org/users/) is using GraphQL in production.*

There are entire conferences dedicated to GraphQL such as [GraphQL Conf](https://graphqlconf.org/) and more resources like the [GraphQL Weekly](https://graphqlweekly.com/) newsletter.