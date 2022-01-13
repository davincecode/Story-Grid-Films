import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const AboutColumn = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)(jpeg)/" }
          name: { in: ["imageMe"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <AboutColumnContainer>
      <AboutHeading>{heading}</AboutHeading>
      <ContentWrapper>
        <LeftColumn>
          {data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
        </LeftColumn>
        <RightColumn>
          <AboutMe>
            <h3>Thanks for being here!</h3>
            <p>
              I'm Vince, a Fine-Art Wedding Photographer and Videographer based
              in Edmonton, Alberta. Also available worldwide where my camera
              might take me. I've been documenting weddings since 2013 and have
              been fortunate enough to be part of the beautiful weddings in
              Edmonton, as well as destination weddings. I hope you take some
              time and learn more about how I can be part of your wedding day.
              My work has been seen in wedding publications; such as Wedding
              Sparrow, Dear Bride, The Knot, Wedding Wire, and much more. Please
              take a look around the website, and I hope we connect soon!
            </p>
          </AboutMe>
        </RightColumn>
      </ContentWrapper>
    </AboutColumnContainer>
  )
}

export default AboutColumn

const AboutColumnContainer = styled.div`
  background: #f9f6f2;
  color: #000;
  padding: 2rem calc((100vw - 1300px) / 2);
`

const AboutHeading = styled.div`
  font-size: clamp(1.2rem, 1.8vw, 3rem);
  text-align: center;
  letter-spacing: 2px;
  padding: 2rem;
  color: #545454;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`

const RightColumn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`

const AboutMe = styled.div`
  h3 {
    font-family: "FontsFree-Net-RareBirdSpecimenII";
    font-size: clamp(3rem, 1.8vw, 3rem);
    font-weight: 100;
    color: #545454;
    margin-bottom: 2rem;
  }

  p {
    color: #545454;
    text-align: justify;
    line-height: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;
    margin-left: 4rem;

    h3 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    padding-right: 4rem;

    h3 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }
`

const LeftColumn = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem;

  @media screen and (max-width: 375px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Images = styled(Img)`
  width: 100%;
`
