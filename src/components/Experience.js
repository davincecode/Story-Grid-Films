import React from "react"
import styled from "styled-components"

const Experience = () => {
  return (
    <Main>
      <FooterLinkTitle>THE EXPERIENCE</FooterLinkTitle>
      <FooterContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            Upon booking, you will receive exclusive access to my Wedding Day
            Guide. This guide helps you with your wedding planning and is also
            full of info to help you prepare for your wedding day. Leading up to
            your wedding day, I will work closely with you and help you with
            your timeline.
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            On your wedding day, for the most part, I capture your moments as
            they happen: the genuine smiles, the raw emotions, and also I offer
            gentle direction to get you comfortable and looking your very best.
            I believe in quality over quantity and shooting efficiently with
            intention, so you can spend more time celebrating with your loved
            ones.
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            Lastly, after your wedding, your beautiful photos will be sent via
            an online gallery where you and your loved ones can download all of
            the images in high resolution. Depending on which investment
            collection you choose, you also get a physical USB, prints, and
            purchase an album.
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterContainer>
    </Main>
  )
}

export default Experience

const Main = styled.div`
  margin-left: 30%;
  transform: translateX(-20%);
  overflow: hidden;
  background: #f9f6f2;

  @media screen and (max-width: 500px) {
    margin-left: 15%;
    transform: translateX(-10%);
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
`

const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 1.2rem;
  text-align: justify;
  color: #545454;
`

const FooterLinkTitle = styled.h2`
  font-size: clamp(1.2rem, 1.8vw, 1.5rem);
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
  color: #545454;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
