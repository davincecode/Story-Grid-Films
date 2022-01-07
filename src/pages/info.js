import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import slide01 from "../assets/images/slide01.jpg"

const info = () => (
  <Layout>
    <Seo title="info | Edmonton Wedding Videographer" />
    <img src={slide01} alt="wedding" />
    <p>Please come back some other time.</p>
  </Layout>
)

export default info
