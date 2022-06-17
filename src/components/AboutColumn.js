import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Navdark from "../components/Navdark"
import StyledButton from "../components/Button"
import { Link } from "gatsby"
import ReactPlayer from 'react-player'

import styled from "styled-components"

const AboutColumn = ({ heading }) => (
  <Layout>
    <Seo title="about | Edmonton Wedding Videographer" />
    <Container>
      <HeadingTitle>
      {heading}
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
                loop: true,
              }
            }
          } }
        />
        <p>
        Our style can best be described as “cinematic storytelling”. We produce films that you want to watch over and over again, not films that you only watch once. We don't just capture you wedding day as it happens and put it to music, but we really get to know who you are as a couple, what makes you unique and tell your story in your film.
        </p>
        <p>
        Our storytelling begins with getting ready, and ends whenever you are ready to let me go. I have found that 10 hours of coverage is more than enough for most couples, but I am always happy to stay longer.
        </p>
        <p>
        We are care-free, laid back, fun, and love coffee! We understand that the wedding planning process is stressful and frustrating at times, so the being laid back and easygoing helps put our couples at ease. This should be a fun process, not a stressful one!
        </p>
      </InvestmentContainer>
      <Link to="/contact">
        <StyledButton>Learn more</StyledButton>
      </Link>
    </Container>
  </Layout>
)

export default AboutColumn

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
    padding: 2rem 0;
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
