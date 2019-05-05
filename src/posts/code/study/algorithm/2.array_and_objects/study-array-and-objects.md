---
title: "알자시리즈 - #2 [Arrays] 그리고 {Objects} 성능 측정"
date : "2019-05-02"
category: "CODE"
featuredImage: "../cover.jpg"
stacks: ["알고리즘","자료구조","JavaScript"]
keywords: ["JavaScript","자바스크립트","algorithm","알고리즘","데이터구조","datastructure"]
---
> _Udemy 강의를 듣고 직접 정리한 요약본입니다._

## Object

- 정렬되지 않아 있으며, key-value 쌍을 이룬다.

```javascript
let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers:[1,2,3,4]
}
```

### 언제 Object를 사용하는가?

- 순서가 필요 없을 때
- 빠른 접근/삽입 그리고 제거가 필요할때

### Object의 Big-O

![Object의 Big-O](./Untitled-394c6862-2afd-432d-85df-7d0968fa9dc9.png "Object의 Big-O")

- 순서가 필요 없을때, objects가 매우 좋은 선택이다!

### Object 메서드의 Big-O

![Object 메서드의 Big-O](./Untitled-f553c434-9e72-4104-a5c3-4a7003dc69cc.png "Object 메서드의 Big-O")

## Array

- 순서있는 리스트!

```javascript
let names = ["Michael","Melissa","Andrea"];

let values = [true, {}, [], 2, "Awesome"];
```

### 언제 Arrays를 사용하는가?

- 순서가 필요할때
- 빠른 접근 + 삽입/제거(어느정도..)

![언제 Arrays를 사용하는가?](./Untitled-e160addc-80b3-4f76-93ee-75c9f42c3ef0.png "언제 Arrays를 사용하는가?")

- Insertion
  - 맨 앞에 삽입 ⇒ 배열 각 엘리먼트의 인덱스를 뒤로 밀어줘야함 ⇒ `O(n)`
  - 맨 뒤에 삽입 ⇒ `O(1)`
- Remove
  - 맨 앞에 삭제 ⇒ 배열 각 엘리먼트의 인덱스를 앞으로 당겨줘야함 ⇒ `O(n)`
  - 맨 뒤에 삭제 ⇒ `O(1)`

즉, push/pop 이 언제나 shift보다 빠르다

### Array Operation의 Big O

![](./Untitled-7087343b-3862-425e-97fc-461bf5a38e39.png "전부 알 필요는 없다.")