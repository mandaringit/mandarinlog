import React from "react"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <h1>안녕.</h1>
      <h2>나는 김혁준, 장성에 살고있는 풀스택 개발자야</h2>
      <p>
        개발자가 필요하신가? <Link to="/contact">컨택트</Link>
      </p>
    </div>
  )
}

export default IndexPage
