import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "/src/assets/images/logo.png"

const Footer = () => {
  return (
    <Main>
      <FooterContainer>
        <FooterLinksWrapper>
          <FooterDesc>
            <a
              className="App-link"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} className="App-logo" alt="logo" />
            </a>
            <h3>STORY GRID FILMS</h3>
            <p>Edmonton Photographer & Videographer</p>
          </FooterDesc>

          <FooterLinksItems>
            <FooterLinkTitle>INFORMATION</FooterLinkTitle>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/portfolio">Portfolio</FooterLink>
            <FooterLink to="/investment">Investment</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>SOCIAL</FooterLinkTitle>
            <FooterLink to="/portfolio">Portfolio</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/investment">Investment</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>RESOURCES</FooterLinkTitle>
            <FooterLink to="/portfolio">Inspirations</FooterLink>
            <FooterLink to="/about">Guides</FooterLink>
            <FooterLink to="/investment">Self-care</FooterLink>
            <FooterLink to="/contact">Vendor Friends</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterContainer>
      <FooterCredit>© STORY GRID FILMS 2022. All Rights Reserved.</FooterCredit>
    </Main>
  )
}

export default Footer

const Main = styled.div`
  background: #f9f6f2;
  padding: 2rem calc((100vw - 1100px) / 2);
  padding-bottom: 2rem;
`

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #f9f6f2;
`

const FooterDesc = styled.div`
  display: grid;
  width: max-content;
  align-items: center;
  align-content: center;
  flex-direction: column;
  display: flex;
  margin-top: 2.5rem;

  .App-logo {
    height: 4vmin;
  }

  h3 {
    float: right;
  }

  p {
    font-size: 0.7rem;
    floart: right;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    display: block;

    .App-logo {
      height: 5vmin;
      float: right;
    }

    h3 {
      float: right;
    }

    p {
      font-size: 0.6rem;
    }
  }
`

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #000;
    transition: 0.3s ease-out;
  }
`
const FooterCredit = styled.div`
  font-size: 14px;
  align-items: center;
  flex-direction: column;
  display: flex;
  grid-template-columns: 1fr;
  margin-top: 5rem;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
