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
      <HeadingTitle>
      <h1>DO YOU REALLY NEED A WEDDING VIDEOGRAPHER?</h1>
      </HeadingTitle>
      <InvestmentContainer>
      
        <p>
        Most brides don't look back and wish they added a few more flowers to the bridal table or kept the open bar flowing for another hour. What many brides do sadly regret is not hiring a wedding videographer. If you are even entertaining the idea of investing in wedding videography, then you must have it. If you don't, you surely will live happily ever after, but with that nagging regret. You will wish you could re-live your best day ever by watching your gorgeous wedding video.
        </p>
        <quote>
        "SADLY OUR MEMORIES FADE OVER TIME AND PHOTOS AND VIDEO ARE A LOVELY WAY TO HOLD ONTO THE BEST OF TIMES." 
        </quote>
        <p>
        You will want to hear the sound of family laughing, the familiar tone of your best friend's voice and the vows you speak to each other as you become man and wife. Some married couples who have celebrated many anniversaries together didn't have a video option when they got married. If they had the opportunity to preserve grandparents speaking on video, it would now be precious to them. Don't lose the chance you have. Video is a way to evoke meaningful memories of a day that flies by in a beautiful blur. You will reminisce over the footage for years to come and it will bring back the feelings of heightened excitement, fierce love and intimate romance that you have in your heart right now. 
        </p>
      </InvestmentContainer>
      <Link to="/contact">
        <StyledButton>Get in touch</StyledButton>
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
    padding: 2rem 0;
  }
`

const HeadingTitle = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 2rem;

  h1 {
  font-size: 1.5rem;
  font-weight: 100;
  }

  
`
