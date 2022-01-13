import React from "react"
import AboutColumn from "../components/AboutColumn"
import "../components/styles/global.css"
import Layout from "../components/layout"
import Navdark from "../components/Navdark"

export default function about() {
  return (
    <Layout>
      <Navdark />
      <AboutColumn heading="EDMONTON WEDDING VIDEOGRAPHER, ALSO AVAILABLE FOR DESTINATION WEDDINGS" />
    </Layout>
  )
}
