import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="About | Edmonton Wedding Videographer" />
    <Hero />
    <h1>About me</h1>
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
)

export default IndexPage
