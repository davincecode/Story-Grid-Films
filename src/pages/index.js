import React from "react"
import Films from "../components/Films"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Stats from "../components/Stats"
import Email from "../components/Email"
import AboutColumn from "../components/AboutColumn"

const IndexPage = () => (
  <Layout>
    <Seo title="Edmonton Wedding Videographer" />
    <Hero />
    <AboutColumn heading="EDMONTON WEDDING VIDEOGRAPHER, ALSO AVAILABLE FOR DESTINATION WEDDINGS" />
    <Films heading="FEATURED WEDDINGS" />
    <Stats />
    <Email />
  </Layout>
)

export default IndexPage
