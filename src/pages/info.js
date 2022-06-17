import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navdark from "../components/Navdark"
import StyledButton from "../components/Button"
import { Link } from "gatsby"
import ReactPlayer from 'react-player'
import { recent } from "../data/recent"

import styled from "styled-components"

const info = () => (
  <Layout>
    <Seo title="info | Edmonton Wedding Videographer" />
    <Navdark />
    <Container>
      <HeadingTitle>
        Your wedding, just like your love story, is truly one-of-a-kind.
      </HeadingTitle>
      <InvestmentContainer>
      <ReactPlayer
              url="https://vimeo.com/526762913"
          config={ {
            vimeo: {
              playerOptions: {
                background: false,
                autoplay: true,
                controls: false,
              }
            }
          } }
              controls={ false }
              />
        <p>
          My storytelling begins with getting ready, and ends whenever you are
          ready to let me go. I have found that 10 hours of coverage is more
          than enough for most couples, but I am always happy to stay longer.
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
`

const InvestmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-bottom: 1rem;
  max-width: 1000px;

  p {
    font-size: 1rem;
    letter-spacing: 2px;
  }
`

const HeadingTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 100;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 2rem;

  @media screen and (min-width: 375px) and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    h1 {
      font-family: "FontsFree-Net-RareBirdSpecimenII";
      font-size: clamp(3rem, 1.8vw, 3rem);
      font-weight: 100;
      margin-bottom: 2rem;
      justify-content: center;
      align-items: center;
    }
  }
`
