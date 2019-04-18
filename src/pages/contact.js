import React from "react"
import Layout from "../components/layout"
import HelmetComponent from "../components/helmetComponent"

const ContactPage = () => {
  return (
    <Layout>
      <HelmetComponent title="컨택트" />
      <h1>Contact</h1>
      <p>
        페이스북 : <a href="https://www.facebook.com/">페이스북 고</a>
      </p>
      <h2>010-4444-4444</h2>
    </Layout>
  )
}

export default ContactPage
