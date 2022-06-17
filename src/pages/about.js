import React from "react"
import AboutColumn from "../components/AboutColumn"
import "../components/styles/global.css"
import Layout from "../components/layout"
import Navdark from "../components/Navdark"

export default function about() {
  return (
    <Layout>
      <Navdark />
      <AboutColumn heading="Your wedding, just like your love story, is truly one-of-a-kind." />
    </Layout>
  )
}
