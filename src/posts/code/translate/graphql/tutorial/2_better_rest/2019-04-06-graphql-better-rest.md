---
title: "GRAPHQL FUNDAMENTALS #2 GraphQL이 더 나은 REST 이다"
date : "2019-04-06"
category: "CODE"
featuredImage: "../graphql-tutorial-cover.png"
stacks: ["번역","GraphQL","NodeJs"]
keywords: ["GraphQL","NodeJs","CODE"]
---
![커버](../graphql-tutorial-cover.png)

>_[How To GraphQL? GRAPHQL FUNDAMENTALS - #2 GraphQL is the better REST](https://www.howtographql.com/basics/1-graphql-is-the-better-rest/?autoplay)의 번역입니다. 부족한 실력으로 인해 다소 잘못된 번역이 있을 수 있습니다._

지난 10년 동안 REST는 웹 API를 설계하는 표준(아직 모호하긴 하지만)이 되었다. 그것은 상태정보를 저장하지 않는 서버(*stateless servers*)나 리소스에 대한 구조화된 접근(*structured access to resources*)과 같은 몇 가지 훌륭한 아이디어를 제공한다. 그러나 REST API는 너무 유연하여 액세스되는 클라이언트의 급변하는 요구 사항을 충족할 수 없는 것으로 나타났다.

GraphQL은 더 많은 유연성과 효율성에 대한 요구에 부응하기 위해 개발되었다! 이는 API와 상호작용할 때 개발자가 경험하는 많은 단점과 비효율성을 해결한다.

API에서 데이터를 가져올 때 REST와 GraphQL의 주요 차이점을 설명하기 위해 간단한 예제 시나리오를 고려해보자. 블로깅 애플리케이션에서 앱은 특정 사용자의 게시물 제목을 표시해야 한다. 동일한 화면에는 해당 사용자의 마지막 세 명의 팔로워의 이름도 표시된다. REST와 GraphQL을 통해 이러한 상황을 어떻게 해결할 것인가?

## 데이터 페치 with REST vs GraphQL

- - -

REST API를 사용하면 일반적으로 여러 엔드포인트에 액세스하여 데이터를 수집할 수 있다. 이 예제에서는 초기 사용자 데이터를 가져오는`/users/<id>`가 엔드포인트가 될 수 있다. 둘째, 사용자에게 모든 게시물을 반환하는 `/users/<id>/posts` 엔드포인트가 있을 가능성이 높다. 세 번째 엔드포인트는 사용자당 팔로워 목록을 반환하는 `/users/<id>/followers`가 된다.

[](https://www.notion.so/d90dcd055ff54934a4b06666421a73d0#086652ab52f94b0a9922165398cd7a57)

*REST를 사용하면 서로 다른 엔드포인트에 필요한 데이터를 가져오기 위해 세 가지 요청을 해야 한다. 또한 엔드포인트가 필요하지 않은 추가 정보를 반환하기 때문에 오버페치를 하는 것이다.*

반면, GraphQL에서는 구체적인 데이터 요구 사항이 포함된 GraphQL 서버에 단일 쿼리를 전송하기만 하면 된다. 그런 다음, 서버는 이러한 요구사항이 충족되는 JSON 객체로 응답한다.

[](https://www.notion.so/d90dcd055ff54934a4b06666421a73d0#de4d918477fb448c8ab55fef68401150)

GraphQL을 사용하면 클라이언트는 조회에 필요한 데이터를 정확하게 지정할 수 있다. 서버 응답 구조는 쿼리에 정의된 중첩 구조(nested structure)를 정확히 따른다.

## 오버페치 및 언더페치는 이제 그만ㅡ

- - -

REST의 가장 일반적인 문제 중 하나는 오버페치 및 언더페치 문제다. 이는 클라이언트가 데이터를 다운로드하는 유일한 방법은 고정 데이터 구조를 반환하는 엔드포인트를 타격(hitting endpoints)하는 것이기 때문에 발생한다. Client에게 정확한 데이터 요구를 제공할 수 있도록 API를 설계하는 것은 매우 어렵다.

> “Think in graphs, not endpoints.” [Lessons From 4 Years of GraphQL](https://www.graphql.com/articles/4-years-of-graphql-lee-byron) by Lee Byron, GraphQL Co-Inventor.

## 오버페치: 불필요한 데이터 다운로드

- - -

오버페치는 클라이언트가 앱에서 실제로 필요한 것보다 더 많은 정보를 다운로드한다는 것을 의미한다. 예를 들어, 사용자 이름만으로 목록을 표시할 필요가 있는 화면을 상상해 보자. REST API에서 이 애플리케이션은 대개 `/users` 엔드포인트를 누르고(hit) 사용자 데이터가 포함된 JSON 배열을 받는다. 그러나 이 응답에는 사용자의 이름만 표시하면 되므로 고객에게 쓸모 없는 정보(예: 그들의 생일 또는 주소)와 같이 반환되는 사용자에 대한 추가 정보가 포함될 수 있다.

## 언더페치 및 n+1 문제

- - -

또 다른 문제는 언더페치와  the *n+1*-requests 문제이다. 언더페치는 일반적으로 특정 엔드포인트가 필요한 정보를 충분히 제공하지 않는다는 것을 의미한다. 클라이언트는 필요한 모든 것을 가져오기 위해 추가 요청을 해야 할 것이다. 이는 클라이언트가 먼저 요소 목록을 다운로드해야 하지만, 필요한 데이터를 가져오기 위해 요소당 한 번의 추가요청(fetch)을 해야 하는 상황으로 확대될 수 있다.

예를 들어, 동일한 앱이 사용자당 마지막 세 명의 팔로워를 표시해야 한다고 가정해 보자.

API는 추가적인 endpoint ⇒ `/users/<user-id>/followers`를 제공한다. 

필요한 정보를 표시하려면, 앱은 endpoint ⇒ `/users` 에 한 번 요청을 한 다음 

각 사용자에 대해 endpoint ⇒ `/users/<user-id>/followers` 를 눌러야(hit) 한다.

## 프런트 엔드에서의 신속한 제품 반복(**Product Iterations**)

- - -

REST API의 일반적인 패턴은 앱 내부에 있는 뷰(views)에 따라 엔드포인트를 구성하는 것이다. 이는 고객이 단순히 해당 엔드포인트에 접근함으로써 특정 뷰에 필요한 모든 정보를 얻을 수 있도록 해주기 때문에 편리하다.

이 접근법의 가장 큰 단점(drawback)은 프런트엔드에서 빠른 반복을 허용하지 않는다는 것이다. UI를 변경할 때마다 이전보다 더 많은(또는 더 적은) 데이터가 필요할 위험이 높다. 따라서 백엔드는 새로운 데이터 요구를 감안하여 조정해야 한다. 이로 인해 생산성이 저하되고 사용자 피드백을 제품에 통합하는 기능이 현저하게 느려진다. 

GraphQL을 통해 이 문제가 해결된다. GraphQL의 유연한 특성으로 인해, 서버에서 추가 작업 없이 클라이언트 측에서 변경을 수행할 수 있다. 고객은 정확한 데이터 요구사항을 지정할 수 있으므로 프런트엔드 설계 및 데이터 요구가 변경될 때 백엔드 엔지니어는 조정할 필요가 없다.

## 백엔드에서의 통찰력 있는(Insightful) 분석

- - -

GraphQL을 사용하면 백엔드에 요청되는 데이터에 대한 세밀한 통찰력(fine-grained insights)을 얻을 수 있다. 각 클라이언트는 어떤 정보에 관심이 있는지 정확히 특정(specifies)하므로 사용 가능한 데이터가 어떻게 사용되는지를 깊이 이해할 수 있다. 이는 예를 들어 API를 발전시키고 클라이언트가 더 이상 요청하지 않는 특정 필드를 감가상각하는 데 도움이 될 수 있다.

GraphQL을 사용하면 서버에서 처리되는 요청에 대한 낮은 수준의 성능(low-level performance) 모니터링도 수행할 수 있다. GraphQL은 클라이언트가 요청한 데이터를 수집하기 위해 *확인자 함수*의 개념(concept of *resolver functions*)을 사용한다. 이러한 resolvers의 성능을 측정하면 시스템의 병목 현상에 대한 중요한 통찰력을 얻을 수 있다.

## **스키마 & 타입 시스템의 이점**

- - -

GraphQL은 강력한 타입 시스템을 사용하여 API의 기능을 정의한다. API에 노출되는 모든 타입은 GraphQL Schema Definition Language(SDL)를 사용하여 *스키마*에 기록된다. 이 스키마는 클라이언트가 데이터에 액세스하는 방법을 정의하는 클라이언트와 서버 간의 일종의 계약 역할을 한다.

스키마가 정의되면, 프런트 엔드와 백엔드에서 일하는 팀들은 네트워크를 통해 전송되는 데이터의 명확한 구조를 알고 있기 때문에 더 이상의 의사소통 없이 업무를 수행할 수 있다.

프런트엔드 팀은 필요한 데이터 구조를 모의 실험하여 애플리케이션을 쉽게 테스트할 수 있다. 서버가 준비되면, 스위치를 돌려(switch can be flipped) 클라이언트 앱이 실제 API에서 데이터를 로드할 수 있다.