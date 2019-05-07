---
title: "GRAPHQL FUNDAMENTALS #3 핵심 개념(Core Concepts)"
date : "2019-04-07"
category: "CODE"
featuredImage: "../cover.png"
stacks: ["번역","GraphQL","NodeJs"]
keywords: ["GraphQL","NodeJs","CODE"]
---
![커버](../cover.png)

>_[How To GraphQL? GRAPHQL FUNDAMENTALS - #3 Core Concepts](https://www.howtographql.com/basics/2-core-concepts/)의 번역입니다._

## **The Schema Definition Language (SDL)**

GraphQL은 API의 스키마를 정의하는 데 사용되는 자체 유형 시스템을 가지고 있다. 스키마를 쓰는 구문을 SDL이라고 한다.

다음은 SDL을 사용하여 `Person` 이라는 간단한 타입을 정의하는 방법이다 :

```graphql
type Person {
  name: String!
  age: Int!
}
```

이 타입(`Person`)은 이름(`name`)과 나이(`age`)라고 하는 두 개의 필드를 가지고 있으며 각각 `String` 과 `Int` 타입이다. 타입 다음에 오는 `!` 는 이 필드가 필요함(*required*)을 의미한다.

또한 타입 간의 관계를 표현하는 것도 가능하다. *블로그* 응용프로그램의 예에서, `Person`은 다음과 같은 `Post`와 연관될 수 있다.

```graphql
type Post {
  title: String!
  author: Person!
}
```

반대로, 관계의 다른 쪽 끝(the other end of the relationship)은 `Person` 타입에 위치해야 한다.

```graphql
type Person {
  name: String!
  age: Int!
  posts: [Post!]!
}
```

`Person`에 있는 `posts` 필드는  `Post`의 배열(*array* of Post)이기 때문에 우리는 방금 `Person` 과 `Post` 사이의 일대다(1:多)적 관계(*one-to-many*-relationship)를 만들었다는 것에 주목한다.

> ⇒ 하나의 포스트 → 한명의 author:Person!을 무조건 갖는다. 그리고 한명의 Person은 여러개의 Post → posts:[Post!]! 를 갖는다.

## Fetching Data with Queries

- - -

REST API를 사용할 때 특정 엔드포인트에서 데이터가 로드된다. 각 엔드포인트는 반환되는 정보의 구조를 명확하게 정의한다. 이는 클라이언트의 데이터 요구사항이 자신이 연결하는 URL에 효과적으로 *인코딩된다(encoded)*는 것을 의미한다.

GraphQL에서 취해진 접근 방식은 근본적으로 다르다. 고정 데이터 구조를 반환하는 여러 엔드포인트를 갖는 대신, GraphQL API는 일반적으로 단일 엔드포인트를 노출한다. 이 방법은 반환되는 데이터의 구조가 고정되어 있지 않기 때문에 효과가 있다. 대신에, 그것은 완전히 유연하며, 클라이언트가 실제로 필요한 데이터를 결정하도록 한다.

이것은 클라이언트가 데이터 요구를 표현하기 위해 서버로 더 많은 *정보(information)*를 보내야 한다는 것을 의미한다. ㅡ 이 정보를 쿼리(*query*)라고 한다.

## 기본적인 Queries

- - -

클라이언트가 서버로 보낼 수 있는 쿼리 예제를 살펴보자 :

```graphql
{
  allPersons {
    name
  }
}
```

이 쿼리의 `allPersons` 필드는 쿼리의 *루트 필드(root field)*라고 한다. 루트 필드를 따르는 모든 것을 쿼리의 *페이로드(payload)*라고 부른다. 이 쿼리의 페이로드에 지정된 유일한 필드는 `name` 뿐이다.

이 쿼리는 현재 데이터베이스에 저장된 모든 사람(all persons)의 목록을 반환한다. 다음은 예제 응답:

```json
{
  "allPersons": [
    { "name": "Johnny" },
    { "name": "Sarah" },
    { "name": "Alice" }
  ]
}
```

각 사용자는 응답에 `name`만 가지고 있지만 서버에 의해 `age`는 반환되지 않는다는 점에 유의하라. 그것은 정확히 `name`이 쿼리에 지정된 유일한 필드였기 때문이다.

클라이언트가 person의 `age`도 필요한 경우 쿼리를 약간 조정하고 쿼리의 페이로드에 새 필드를 포함하기만 하면 된다 :

```graphql
{
  allPersons {
    name
    age
  }
}
```

GraphQL의 주요 장점 중 하나는 자연스럽게 *중첩된* 정보(*nested* information)를 쿼리할 수 있다는 것이다. 예를 들어, `Person`이 작성한 모든 `posts`을 로드하려면 해당 타입의 구조를 따라 다음 정보를 요청하라.

```graphql
{
  allPersons {
    name
    age
    posts {
      title
    }
  }
}
```

## Arguments를 가진 Queries

- - -

GraphQL에서 각 필드(*field*)는 스키마에 지정된 인수(arguments)를 0개 이상 가질 수 있다. 예를 들어 `allPersons` 필드는 특정 인원까지만 반환할 수 있는 `last` 매개변수를 가질 수 있다. 해당하는 쿼리는 다음과 같다.

```graphql
{
  allPersons(last: 2) {
    name
  }
}
```

## Mutations를 이용한 데이터 Writing (Writing Data with Mutations)

- - -

서버에서 정보를 요청하는 것 외에도, 대부분의 애플리케이션은 현재 백엔드에 저장되어 있는 데이터를 변경하는 어떤 방법을 필요로 한다. GraphQL에서는 이러한 변경을 소위 *mutations*를 사용하여 수행한다. 일반적으로 세 가지 종류의 mutations가 있다 :

- 새 데이터 생성
- 기존 데이터 업데이트
- 기존 데이터 삭제

mutations는 query와 동일한 구문 구조를 따르지만 **항상 `mutation` 키워드로 시작**해야 한다. 다음은 새 `Person`을 생성하는 방법에 대한 예.

```graphql
mutation {
  createPerson(name: "Bob", age: 36) {
    name
    age
  }
}
```

우리가 전에 쓴 query와 비슷하게, mutation 또한 *루트 필드(root field)*를 가지고 있다는 것을 주목하라. 이 경우 루트 필드는 `createPerson`이다. 또한 우리는 이미 필드의 인자(arguments)의 개념에 대해 배웠다. 이 경우 `createPerson` 필드는 새 사람(new person’s)의 `name` 과 `age`를 특정하는 두 가지 인자(arguments)를 가진다.

query와 마찬가지로, 우리는 새로운(new) `Person` 객체(object)의 다른 속성을 요청할 수 있는 mutation에 대한 페이로드도 지정할 수 있다. 여기선 `name`과 `age`를 요구하고 있다 - 비록 우리가 페이로드를 mutation으로 전할 때 이미 알고 있기 때문에 이번 예에서 그것은 별반 도움이 되지 않는다. 하지만, mutation을 보낼 때 정보를 query할 수 있는 것은 한 번의 왕복(single roundtrip)으로 서버에서 새로운 정보를 검색(retrieve)할 수 있는 매우 강력한 도구가 될 수 있다!

⇒ 뮤테이션 한번으로 쿼리까지 같이 덤으로 딸려오니 좋다는 이야기.

위의 mutation에 대한 서버 응답은 다음과 같다 :

```json
"createPerson": {
  "name": "Bob",
  "age": 36,
}
```

자주 찾을 수 있는 패턴 중 하나는 GraphQL 타입이 새 객체(new objects)를 생성할 때 서버에서 생성하는 고유 ID(unique *IDs*)를 가지고 있다는 것이다. 이전의 `Person` 타입을 다음과 같은 `id`를 추가해 확장하자.

```graphql
type Person {
  id: ID!
  name: String!
  age: Int!
}
```

이제, 새로운 `Person`이 생성될 때, 당신은 직접적으로 mutation의 페이로드에 `id`를 요청할 수 있다. 왜냐하면 그것은 이전엔 클라이언트에서 이용할 수 없었던 정보이기 때문이다 :

```graphql
mutation {
  createPerson(name: "Alice", age: 36) {
    id
  }
}
```

## 구독을 사용한 실시간 업데이트(Realtime Updates with Subscriptions)

- - -

오늘날 많은 애플리케이션에 대한 또 다른 중요한 요건은 중요한 이벤트에 대해 즉시 정보를 얻기 위해 서버에 *실시간*으로 연결(*realtime* connection)하는 것이다. 이 사용 사례에 대해 GraphQL은 *구독*(*subscriptions*) 개념을 제공한다.

클라이언트가 이벤트를 *구독(subscribes)*하면, 그것은 서버에 대한 지속적인 연결을 시작하고 유지할 것이다. 특정 이벤트가 실제로 발생할 때마다, 서버는 해당 데이터를 클라이언트에게 푸시한다. **일반적인 "*요청-응답* 주기(*request-response*-cycle)"를 따르는 query나 mutation과 달리, subscriptions은 클라이언트로 전송되는 데이터의 *흐름*(*stream* of data)을 나타낸다.**

구독(Subscriptions)은 queries 및 mutations와 동일한 문법을 사용하여 작성된다. 다음은 `Person` 타입에서 발생하는 이벤트에 대한 subscribe 예제 :

```graphql
subscription {
  newPerson {
    name
    age
  }
}
```

클라이언트가 이 subscription을 서버로 보낸 후, 그들 사이의 연결이 열린다. 그런 다음, 새로운 `Person`을 생성하는 새로운 mutation이 수행될 때마다, 서버는 이 사람에 대한 정보를 클라이언트에게 전송한다.

```json
{
  "newPerson": {
    "name": "Jane",
    "age": 23
  }
}
```

## 스키마 정의(Defining a Schema)

- - -

이제 querys, mutations 및 subscriptions의 모양을 기본적으로 이해했으므로 이 모든 정보를 종합하여 지금까지 본 예를 실행할 수 있는 스키마를 작성하는 방법에 대해 알아보자.

GraphQL API를 사용할 때 *스키마(Schema)*는 가장 중요한 개념 중 하나이다. 그것은 API의 기능을 명시하고 클라이언트가 데이터를 요청할 수 있는 방법을 규정한다. 그것은 종종 서버와 클라이언트 사이의 *계약*(*contract*)으로 보여진다.

일반적으로 스키마는 GraphQL 타입의 모음이다. 그러나 API를 위한 스키마를 작성할 때 다음과 같은 몇 가지 특별한 *루트(root)* 타입이 있다 :

```graphql
type Query { ... }
type Mutation { ... }
type Subscription { ... }
```

`Query`, `Mutation` 및 `Subscription` 유형은 클라이언트가 보낸 요청에 대한 *진입점(entry points)*이다. 앞에서 본 `allPersons` query를 활성화하려면 `Query` 타입을 다음과 같이 작성해야 한다.

```graphql
type Query {
  allPersons: [Person!]!
}
```

`allPersons`는 API의 *루트 필드(root field)*라고 불린다. `allPersons` 필드에 `last` 인수(argument)를 추가한 예를 다시 한 번 고려해 볼 때 다음과 같이 `Query`를 작성해야 한다 :

```graphql
type Query {
  allPersons(last: Int): [Person!]!
}
```

마찬가지로 `createPerson` → mutation의 경우, `Mutation` 타입에 루트 필드를 추가해야 한다 :

```graphql
type Mutation {
  createPerson(name: String!, age: Int!): Person!
}
```

이 루트 필드에는 새로운 `Person`의 `name`과 `age`라는 두 가지 인자(arguments)도 포함되어 있다는 점을 기억하자.

마지막으로 subscriptions를 위해 새로운 `newPerson` 루트 필드를 추가해야 한다 :

```graphql
type Subscription {
  newPerson: Person!
}
```

모두 합치면, 이것은 이 장에서 보았던 모든 queries와 mutation에 대한 *전체* 스키마(*full* schema) 이다 :

```graphql
type Query {
  allPersons(last: Int): [Person!]!
}

type Mutation {
  createPerson(name: String!, age: Int!): Person!
}

type Subscription {
  newPerson: Person!
}

type Person {
  name: String!
  age: Int!
  posts: [Post!]!
}

type Post {
  title: String!
  author: Person!
}
```

## Learn more

- - -

To learn more about the core concepts in GraphQL, be sure to check out the following article series:

- [GraphQL Server Basics (Part I): GraphQL Schemas, TypeDefs & Resolvers Explained](https://blog.graph.cool/graphql-server-basics-the-schema-ac5e2950214e)
- [GraphQL Server Basics (Part II): The Network Layer](https://blog.graph.cool/graphql-server-basics-the-network-layer-51d97d21861)
- [GraphQL Server Basics (Part III): Demystifying the "info" argument in GraphQL resolvers](https://blog.graph.cool/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a)