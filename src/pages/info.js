import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navdark from "../components/Navdark"
import StyledButton from "../components/Button"
import { Link } from "gatsby"

import styled from "styled-components"

const info = () => (
  <Layout>
    <Seo title="info | Edmonton Wedding Videographer" />
    <Navdark />
    <Container>
      <h1>Your wedding, just like your love story, is truly one-of-a-kind.</h1>
      <InvestmentContainer>
        <p>
          My storytelling begins with getting ready, and ends whenever you are
          ready to let me go.
          <p>
            I have found that 10 hours of coverage is more than enough for most
            couples, but I am always happy to stay longer.
          </p>
        </p>
      </InvestmentContainer>
      <Link to="/contact">
        <StyledButton>Learn more</StyledButton>
      </Link>
    </Container>
  </Layout>
)

export default info

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #545454;

  h1 {
    font-family: "FontsFree-Net-RareBirdSpecimenII";
    font-size: clamp(3rem, 1.8vw, 3rem);
    font-weight: 100;
    margin-bottom: 2rem;
    padding: 5rem;
  }
`

const InvestmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  p {
    width: 80vw;
    display: flex;
    text-align: justify;
  }
`
