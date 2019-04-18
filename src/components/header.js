import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>mandarindigo</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/blog">블로그</Link>
          </li>
          <li>
            <Link to="/contact">컨택트</Link>
          </li>
          <li>
            <Link to="/about">어바웃</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
