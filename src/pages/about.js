import React from "react"
import AboutColumn from "../components/AboutColumn"
import "../components/styles/global.css"
import Layout from "../components/layout"
import Header from "../components/Header"

export default function about() {
  return (
    <Layout>
      <Header />
      <AboutColumn heading="Your wedding, just like your love story, is truly one-of-a-kind." />
    </Layout>
  )
}

