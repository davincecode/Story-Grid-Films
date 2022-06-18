import React from "react"
import Films from "../components/Films"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Experience from "../components/Experience"
import Email from "../components/Email"
import Header from "../components/Header"
import Intro from '../components/Intro';

const IndexPage = () => (
  <Layout>
    <Seo title="Edmonton Wedding Videographer" />
    <Header />
    <Hero />
    <Intro
      heading="WEDDING CINEMATOGRAPHER"
      subheading="Edmonton, Vancouver and Worldwide"
    />
    <Films
      heading="Your wedding is one of the most beautiful days of your life."
      subheading="Let's capture it in a way that is timeless, elegant, & intimate."
    />
    <Experience />
    <Email />
  </Layout>
)

export default IndexPage
