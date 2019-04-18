import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>MANDARIN은?</h1>
      <Link to="/contact">컨택트</Link>
      <p>만다린은 남성이다.</p>
      <p>만다린은 개발자다.</p>
      <p>만다린은 게임을 좋아한다.</p>
      <p>만다린은 노래도 좋아한다.</p>
      <p>만다린은 영화도 좋아한다.</p>
    </Layout>
  )
}

export default AboutPage
