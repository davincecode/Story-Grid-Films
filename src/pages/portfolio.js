import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Email from "../components/Email"
import AboutColumn from "../components/AboutColumn"

const portfolio = () => (
  <Layout>
    <Seo title="Edmonton Wedding Videographer" />
    <AboutColumn heading="EDMONTON WEDDING VIDEOGRAPHER, ALSO AVAILABLE FOR DESTINATION WEDDINGS" />

    <Email />
  </Layout>
)

export default portfolio
