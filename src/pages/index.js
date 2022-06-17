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
    <Intro heading="EDMONTON WEDDING VIDEOGRAPHER, ALSO AVAILABLE FOR DESTINATION WEDDINGS" />
    <Films heading="FEATURED WEDDINGS" />
    <Experience />
    <Email />
  </Layout>
)

export default IndexPage
