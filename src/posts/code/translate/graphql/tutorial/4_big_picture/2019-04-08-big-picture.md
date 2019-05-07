---
title: "GRAPHQL FUNDAMENTALS #4 Big Picture (아키텍처)"
date : "2019-04-08"
category: "CODE"
featuredImage: "../graphql-tutorial-cover.png"
stacks: ["번역","GraphQL","NodeJs"]
keywords: ["GraphQL","NodeJs","CODE"]
---
![커버](../graphql-tutorial-cover.png)

>_[How To GraphQL? GRAPHQL FUNDAMENTALS - #4 Big Picture (Architecture)](https://www.howtographql.com/basics/3-big-picture/)의 번역입니다._

GraphQL은 *규격(specification)*으로만 출시되었다. 즉, GraphQL은 실제로 *GraphQL 서버*의 동작을 상세히 기술하는 긴 문서([long document](https://facebook.github.io/graphql/)) 이상일 수 없다. ⇒ 규격 안에서만 움직인다는 뜻

### 사용 사례 (Use Cases)

- - -

이 섹션에서는 GraphQL 서버를 포함하는 3가지 아키텍처에 대해 설명하겠다. 

1.*연결된 데이터베이스*(*with a connected database*)가 있는 GraphQL 서버

2.*다수의 타사 또는 *레거시 시스템 앞에 있는 얇은 계층*(*thin layer in front of a number of third party or legacy systems*)으로서, 단일 GraphQL API를 통해 이들을 통합하는 GraphQL 서버 

> __*레거시 시스템* : 이전의 방법,기술인 컴퓨터 시스템 또는 앱 프로그램. 오래됨,교체가 필요한것을 의미하기도 함__

3.동일한 GraphQL API를 통해 모두 액세스할 수 있는 *연결된 데이터베이스 및 타사 또는 레거시 시스템의 하이브리드 접근 방식*(*hybrid approach of a connected database and third party or legacy systems*) 

세 아키텍처 모두 GraphQL의 주요 사용 사례를 나타내며, 사용할 수 있는 맥락에서 유연성을 보여준다.

### 1. 연결된 데이터베이스가 있는 GraphQL 서버

- - -

**GraphQL server with a connected database**

이 아키텍쳐는 *그린필드(greenfield) 프로젝트에서 가장 흔할 것이다. 설정에서 GraphQL 규격을 구현(implements)하는 단일 (웹) 서버가 있다. 쿼리가 GraphQL 서버에 도착하면 서버는 쿼리의 페이로드를 읽고 데이터베이스에서 필요한 정보를 가져오게 된다. 이것을 쿼리 리졸빙(*resolving* the query)이라고 부른다. 그런 다음 공식 규격에 설명된 대로([as described in the official specification](https://facebook.github.io/graphql/#sec-Response)) 응답 객체를 만들어 고객에게 반환한다.

>__*그린필드 프로젝트 :  다른 시스템, 특히 다른 시스템과의 통합에 대한 걱정없이, 완전히 새로운 환경에 대한 시스템을 개발 중 하나가 될 수있는 레거시 시스템__

GraphQL은 실제로 *전송 계층 불가지론자(transport-layer agnostic)*라는 것을 유념하는 것이 중요하다. 이것은 잠재적으로 이용 가능한 네트워크 프로토콜과 함께 사용될 수 있다는 것을 의미한다. 따라서 TCP, WebSockets 등에 기반한 GraphQL 서버를 구현할 수 있다.

GraphQL은 또한 데이터 저장에 사용되는 데이터베이스나 포맷에 대해서는 신경 쓰지 않는다. AWS Aurora와 같은 SQL 데이터베이스나 MongoDB와 같은 NoSQL 데이터베이스를 사용할 수 있다.

[](https://www.notion.so/e0c3d5c178024560bc4be512692abc3c#293f5e3c58274d5292f7ba1539e7ffb0)

*단일 데이터베이스에 연결하는 하나의 GraphQL 서버를 사용하는 표준 그린필드 아키텍처.*

### 2. 기존 시스템을 통합하는 GraphQL 계층(GraphQL layer that integrates existing systems)

- - -

GraphQL의 또 다른 주요 사용사례는 여러 기존시스템을 일관성있는 단일 GraphQL API 뒤에 통합하는 것이다. 이는 특히 수년동안 성장하여 현재 높은 유지보수 부담을 안고 있는 레거시 인프라와 다양한 API를 보유한 기업들에게 매력적이다. 이러한 레거시시스템의 한 가지 주요 문제는 그것들이 여러 시스템에 접속해야하는 혁신적인 제품을 만드는 것을 실질적으로 불가능하게 만든다는 것이다.

이러한 맥락에서 GraphQL은 이러한 기존 시스템을 *통합(unify)*하고, 그 복잡성을 멋진 GraphQL API 뒤에 숨기는 데 사용될 수 있다. 이 방법으로, 필요한 데이터를 가져오기 위해 GraphQL 서버와 간단히 대화하는 새로운 클라이언트 애플리케이션을 개발할 수 있다. 그런 다음 GraphQL 서버는 기존 시스템에서 데이터를 가져와 GraphQL 응답 형식(response format)으로 패키징하는 역할을 한다.

GraphQL 서버가 사용 중인 데이터베이스 타입에 신경 쓰지 않았던 이전 아키텍처와 마찬가지로, 이번에는 query를 *resolve* 하는데에 필요한 데이터를 가져오는 데 사용하는 데이터 소스에 대해서는 신경 쓰지 않는다.

[](https://www.notion.so/e0c3d5c178024560bc4be512692abc3c#ae51fbe5795f46bfab75c1029dc480dd)

*GraphQL을 사용하면 마이크로서비스, 레거시인프라 또는 타사API와 같은 기존시스템의 복잡성을 단일 GraphQL 인터페이스 뒤에 숨길 수 있다.*

### 3. 연결된 데이터베이스와 기존시스템의 통합이 포함된 하이브리드 접근방식(Hybrid approach with connected database and integration of existing system)

- - -

마지막으로, 두 가지 접근방식을 결합하고 연결된 데이터베이스를 가지고 있지만, 여전히 레거시 또는 제3자(third—party)시스템과 통신하는 GraphQL 서버를 구축할 수 있다. 

query가 서버에서 수신되면 query는 query를 resolve하고 연결된 데이터베이스 또는 일부 통합 API에서 필요한 데이터를 검색(retrieve)한다.

[](https://www.notion.so/e0c3d5c178024560bc4be512692abc3c#5563fa3976a04d2fb375f42b5b5d8503)

*또한 두 가지 접근 방식을 결합할 수 있으며, GraphQL 서버는 기존 시스템뿐만 아니라 단일 데이터베이스에서도 데이터를 가져올 수 있다. ㅡ 완벽한 유연성을 보장하고 모든 데이터 관리 복잡성을 서버로 끌어올 수 있다.*

### Resolver Functions

- - -

하지만 GraphQL을 통해 이러한 유연성을 확보하는 방법은 무엇인가? 어떻게 이렇게 다른 종류의 사용사례에 적합한가?

이전 챕터에서 배웠듯이, GraphQL query(또는 mutation)의 페이로드는 *필드* 세트(set of *fields*)로 구성된다. GraphQL 서버 구현에서 각각의 필드는 실제로 리졸버(*[resolver](http://graphql.org/learn/execution/#root-fields-resolvers)*)라 불리는 정확히 하나의 함수와 일치한다. **resolver function의 유일한 목적은 필드의 데이터를 가져오는 것**이다.

서버는 query를 수신할 때, 쿼리의 페이로드에 지정된 필드의 모든 함수를 호출(call all the functions)한다. 따라서 쿼리를 *resolves*하고 각 필드에 대해 올바른 데이터를 검색할 수 있다. 모든 resolver들이 리턴되면, 서버는 query에 의해 설명된 포맷으로 데이터를 포장하여 클라이언트로 다시 보낸다.

[](https://www.notion.so/e0c3d5c178024560bc4be512692abc3c#8fdb7489c899499eb42be6fdce9f8ecc)

*query의 각 필드는 [resolver function](http://graphql.org/learn/execution/#root-fields-resolvers)에 해당한다. GraphQL은 query가 들어오면 지정된 데이터를 가져오기 위해 필요한 모든 리졸버를 호출(calls all required resolvers)한다.*

## GraphQL Client Libraries

- - -

GraphQL은 REST API에서 경험하는 많은 불편과 단점(over 그리고 underfetching과 같은)을 완전히 제거하기 때문에 프런트엔드 개발자에게 특히 좋다. 복잡성은 강력한 머신이 많은 연산작업을 처리할 수 있는 서버 쪽으로 밀려난다. 클라이언트는 자신이 획득한 데이터가 실제로 어디에서 온 것인지 알 필요가 없으며 단일의 일관성 있고 유연한 API를 사용할 수 있다. 

GraphQL과 함께 도입한 데이터 가져오기 접근 방식(imperative data fetching approach)에서 순수하게 선언적인 접근 방식(purely declarative one)으로 전환하는 주요 변화를 고려해보자. REST API에서 데이터를 가져올 때 대부분의 애플리케이션은 다음 단계를 거쳐야 한다:

1. HTTP 요청 생성 및 전송(예: Javascript로 `fetch` 하기) 
2. 서버 응답 수신 및 구문 분석
3. 로컬에 데이터 저장(단순히 메모리(in memory)에 또는 영구 저장(persistent)) 
4. UI에 데이터를 표시

이상적인 *선언적 데이터 가져오기*(*declarative data fetching*) 접근방식에선, 클라이언트는 다음 두 단계 이상을 수행해서는 안 된다 :

1. 데이터 요구 사항 설명
2. UI에 데이터 표시

모든 하위 수준의 네트워킹 작업과 데이터 저장은 *추상화 되어야(abstracted) 하며, data dependencies 선언이 지배적인 부분(dominant part)이 되어야 한다.
( ⇒ 네트워킹 및 데이터저장 작업은 간소화되어야 하며, 데이터 디펜던시는 지배가능한 부분이 되어야 한다는 뜻?)

>__*추상화(abstraction)* : 컴퓨터 과학에서 추상화(abstraction)는 복잡한 자료, 모듈, 시스템 등으로부터 핵심적인 개념 또는 기능을 간추려 내는 것을 말한다.__

이것이 바로 Relay나 Apollo 같은 GraphQL client libraries가 당신에게 할 수 있게끔 해주는 것이다. 그것들은 인프라의 반복적인 구현(repetitive implementation of infrastructure)을 처리할 필요없이 애플리케이션의 중요한 부분에 집중할 수 있게하는 추상화를 제공한다.