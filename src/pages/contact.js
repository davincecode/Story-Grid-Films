import React from "react"
import Layout from "../components/layout"
import Navdark from "../components/Navdark"
import Seo from "../components/seo"
import styled from "styled-components"

const contact = () => (
  <Layout>
    <Seo title="contact | Edmonton Wedding Videographer" />
    <Navdark />
    <Heading>
      <h1>I would love to hear from you!</h1>
    </Heading>
    <ContactForm>
      <iframe
        src="https://app.studioninja.co/contactform/parser/0a800fc9-7033-1037-8170-4eea29d33fe4/0a800fc9-7033-1037-8170-4eec6f273ff9"
        title="contacts"
        className="contactForm"
      ></iframe>
    </ContactForm>
  </Layout>
)

export default contact

const ContactForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #545454;

  h1 {
    font-family: "FontsFree-Net-RareBirdSpecimenII";
    font-size: clamp(3rem, 1.8vw, 3rem);
    font-weight: 100;
    padding-top: 3rem;
  }
`
