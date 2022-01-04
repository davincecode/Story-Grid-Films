import React from "react"
import styled from "styled-components"

const Stats = () => {
  return (
    <Main>
      <FooterLinkTitle>THE EXPERIENCE</FooterLinkTitle>
      <FooterContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterP>
              Upon booking, you will receive exclusive access to my Wedding Day
              Guide. This guide helps you with your wedding planning and is also
              full of info to help you prepare for your wedding day. Leading up
              to your wedding day, I will work closely with you and help you
              with your timeline.
            </FooterP>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterP>
              On your wedding day, for the most part, I capture your moments as
              they happen: the genuine smiles, the raw emotions, and also I
              offer gentle direction to get you comfortable and looking your
              very best. I believe in quality over quantity and shooting
              efficiently with intention, so you can spend more time celebrating
              with your loved ones.
            </FooterP>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterP>
              Lastly, after your wedding, your beautiful photos will be sent via
              an online gallery where you and your loved ones can download all
              of the images in high resolution. Depending on which investment
              collection you choose, you also get a physical USB, prints, and
              purchase an album.
            </FooterP>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterContainer>
    </Main>
  )
}

export default Stats

const Main = styled.div`
  background: #f9f6f2;
  padding: 2rem calc((100vw - 1100px) / 2);
  padding-bottom: 2rem;
`

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: #f9f6f2;
`

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 1.2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
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

const FooterP = styled.p`
  text-align: justify;
  line-height: 1.8rem;
  color: #545454;
`
