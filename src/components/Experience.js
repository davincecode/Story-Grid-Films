import React from "react"
import styled from "styled-components"

const Experience = () => {
  return (
    <Container>
      <FooterLinkTitle>THE EXPERIENCE</FooterLinkTitle>
      <FooterContainer>
        <FooterLinksWrapper>
          Upon booking, you will receive exclusive access to my Wedding Day
          Guide. This guide helps you with your wedding planning and is also
          full of info to help you prepare for your wedding day. Leading up to
          your wedding day, I will work closely with you and help you with your
          timeline.
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          On your wedding day, for the most part, I capture your moments as they
          happen: the genuine smiles, the raw emotions, and also I offer gentle
          direction to get you comfortable and looking your very best. I believe
          in quality over quantity and shooting efficiently with intention, so
          you can spend more time celebrating with your loved ones.
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          Lastly, after your wedding, your beautiful photos will be sent via an
          online gallery where you and your loved ones can download all of the
          images in high resolution. Depending on which investment collection
          you choose, you also get a physical USB, prints, and purchase an
          album.
        </FooterLinksWrapper>
      </FooterContainer>
    </Container>
  )
}

export default Experience

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 500px) {
    margin-left: 15%;
    transform: translateX(-10%);
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: #f9f6f2;
  margin-bottom: 3rem;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    line-height: 1.5rem;
  }
`

const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.5rem 1.2rem;
  text-align: justify;
  line-height: 1.8rem;
  color: #545454;
`

const FooterLinkTitle = styled.div`
  font-family: Lora;
  font-size: clamp(1.2rem, 1.8vw, 1.5rem);
  text-align: center;
  letter-spacing: 2px;
  margin-top: 40px;
  margin-bottom: 40px;

  color: #545454;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
