import React from "react"
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutColumn from "../components/AboutColumn"

const info = props => (
  <Layout>
    <Carousel>
      <Carousel.Item>
        <Img
          fluid={props.data.slide01ql.childImageSharp.fluid}
          alt="edmonton wedding"
        />
        <Carousel.Caption>
          <h3>Rob & Ali</h3>
          <p>
            "You are amazing at what you do, Vince, and we love the photos. Job
            well done you made me cry! You’ve captured every moment and so many
            wonderful happy faces of our friends and family. We will treasure
            these images for our lifetime. We could not have wished for a better
            photographer than you on our most precious day. We both feel so
            lucky with how the day went and for you to capture it in such a
            beautiful way is simply priceless. Thank you!"
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          fluid={props.data.slide02ql.childImageSharp.fluid}
          alt="edmonton wedding"
        />
        <Carousel.Caption>
          <h3>Keith & Samantha</h3>
          <p>
            "Finding a wedding photographer in Edmonton was easy. Choosing a
            wedding photographer was hard. We were overwhelmed with so many
            Edmonton wedding photographers! But we were so lucky we found Vince.
            He was super friendly and accommodating and helped us throughout the
            wedding planning process. His sense of humor and easy-going approach
            really made us feel comfortable in front of the camera. Vince
            beautifully captured the feel of our wedding day, and we can’t thank
            him enough."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          fluid={props.data.slide03ql.childImageSharp.fluid}
          alt="edmonton wedding"
        />
        <Carousel.Caption>
          <h3>Chris and Sarah</h3>
          <p>
            "It was a truly magical day, and I can’t find the words to describe
            it. Thanks to Vince, we do have the photos to remember it all. Vince
            has incredible talent; he is such an amazing photographer and a
            wonderful soul. Our photographs are magnificent, and we shall
            treasure them for the rest of our lives."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <AboutColumn heading="EDMONTON WEDDING VIDEOGRAPHER, ALSO AVAILABLE FOR DESTINATION WEDDINGS" />
    <Seo title="info" />

    <h1>SITE UNDER CONSTRUCTION</h1>
    <p>Please come back some other time.</p>

    <Link to="/">HOME PAGE</Link>
  </Layout>
)

export default info

export const query = graphql`
  query {
    slide01ql: file(relativePath: { eq: "slide01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide02ql: file(relativePath: { eq: "slide02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    slide03ql: file(relativePath: { eq: "slide03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
