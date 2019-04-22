---
title: "Prisma Set up ⇒ Existing DB"
date : "2019-02-01"
category: "CODE"
featuredImage: "./cover.png"
stacks: ["Prisma","NodeJs"]
---

## 목표

- Prisma CLI 설치
- Docker를 사용하여 Prisma 설정
- 기존 데이터베이스를 살펴보고 데이터 모델 추출
- Prisma API를 구성하려면 데이터 모델을 사용하라.
- Prisma 클라이언트 생성
- Prisma 클라이언트를 사용하여 데이터 읽기 및 쓰기

🚧 Prisma에서 기존 데이터베이스를 사용하는 것은 현재 PostgreSQL 또는 MongoDB 데이터베이스를 사용할 때만 작동 합니다.🚧

## STEP 1 : Prisma CLI 설치

The  is used for various Prisma workflows. You can install it using Homebrew or NPM:

Homebrew

[Prisma CLI](https://www.prisma.io/docs/prisma-cli-and-configuration/using-the-prisma-cli-alx4/)는 다양한 Prisma 워크플로에 사용된다. Homebrew 또는 NPM을 사용하여 설치할 수 있음 :

**NPM**

```bash
npm install -g prisma
```

## STEP 2 : Docker 설치

Prisma를 로컬에서 사용하려면 Docker가 컴퓨터에 설치되어 있어야 한다. 아직 Docker가 없는 경우 운영 체제용 Docker Community Edition을 다운로드하라.

⇒ 도커를 사용하고 싶지 않다면 지금은 데모 데이터베이스를 사용할 수 있다.

## STEP 3 : Prisma 설정

Run the following command to connect Prisma to your existing database:

```bash
  prisma init hello-world
```

This launches an interactive wizard. Here's what you need to do:

1. Select **Use existing database**
2. Select your database, either **PostgreSQL** or **MongoDB**
3. Provide the **connection details** for your database (see below for more info)
4. Select the **Prisma JavaScript client**

**Connection details for PostgreSQL**

- The host of your Postgres server, e.g. **`localhost`**. (When connecting to a local database, you might need to use **`host.docker.internal`**.)
- The port where your Postgres server listens, e.g. **`5432`**.
- The name of your Postgres database.
- The name of your Postgres schema, e.g. **`public`**.
- The database user.
- The password for the database user.
- Whether your database server uses SSL, possible values are **`true`** and **`false`**.

⇒ **Launch Prisma**

To start Prisma and connect it to your database, run the following commands:

```bash
    cd hello-world
    docker-compose up -d
```

Prisma is now connected to your database and runs on **`http://localhost:4466`**.

[Bind for 0.0.0.0:4466 failed: port is already allocated](https://www.notion.so/ba5dc5648b7f427fa4dca860ad5827e0)

## STEP 4 : Prisma datamodel 배포

이제 우리는 Prisma datamodel을 디플로이하기 위한 *최소한*의 준비를 했다.아래의 커맨드를 실행하자.(이것은 데이터베이스의 어떤것도 바꾸지 않는다) : 

    $ prisma deploy

🚧  Prisma 서버를 실행하는 것은 아마 몇분이 걸릴 수 있다. **`prisma deploy`** 커맨드가 실패한다면 몇분 기다렸다가 다시 실행해 보자. 또한 **`docker ps`**를 실행해 Prisma docker 컨테이너가 실제로 실행되고 있는지 확인하자.  🚧

## STEP 5 : Node 어플리케이션 준비

아래 커맨드를 실행해 빈 Node 스크립트를 만들자.

    $ touch index.js

그다음, 빈 NPM(yarn도 가능) 프로젝트와 필요한 디펜던시를 현재 디렉토리에 설치하자.

    $ npm init -y
    $ npm install --save prisma-client-lib

## STEP 6 : Prisma client를 이용해 데이터 읽고 쓰기

Prisma 클라이언트의 API 작업은 데이터베이스 검사로부터 생성된 datamodel에 따라 달라진다. 다음 샘플 쿼리는 다음과 같이 정의된 데이터모듈에 User type이 있다고 가정한다.

**datamodel.prisma**

    type User {
      id: ID! @unique
      name: String!
    }

아래 코드를 `index.js`에 추가하자

```
    const { prisma } = require('./generated/prisma-client')
    
    // A `main` function so that we can use async/await
    async function main() {
    
      // Create a new user called `Alice`
      const newUser = await prisma.createUser({ name: 'Alice' })
      console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)
    
      // Read all users from the database and print them to the console
      const allUsers = await prisma.users()
      console.log(allUsers)
    }
    
    main().catch(e => console.error(e))
```

스크립트를 실행하자

```bash
  node index.js
```

이 명령을 사용하여 이 스크립트를 실행할 때마다 데이터베이스에 새 사용자 레코드가 생성된다(CreateUser 호출로 인해).