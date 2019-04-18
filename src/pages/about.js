import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>MANDARIN은?</h1>
      <Link to="/contact">컨택트</Link>
      <p>만다린은 남성이다.</p>
      <p>만다린은 개발자다.</p>
      <p>만다린은 게임을 좋아한다.</p>
      <p>만다린은 노래도 좋아한다.</p>
      <p>만다린은 영화도 좋아한다.</p>
      <Footer />
    </div>
  )
}

export default AboutPage
