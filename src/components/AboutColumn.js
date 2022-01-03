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
  width: 100%;
  background: #f9f6f2;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`

const AboutHeading = styled.div`
  font-size: clamp(1.2rem, 1.8vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  letter-spacing: 2px;
  color: #545454;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const AboutMe = styled.div`
  align-items: center;
  width: 70%;

  h3 {
    font-family: "FontsFree-Net-RareBirdSpecimenII";
    font-size: clamp(3rem, 1.8vw, 3rem);
    font-weight: 100;
    color: #545454;
  }

  p {
    color: #545454;
    text-align: justify;
    line-height: 1.8rem;
  }

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
`

const LeftColumn = styled.div`
  display: block;

  @media screen and (max-width: 500px) {
    display: block;
`

const RightColumn = styled.div`
  display: block;
  margin-top: 1rem;

  @media screen and (max-width: 500px) {
    display: flex;
    margin-top: 3rem;
  }
`

const Images = styled(Img)`
  margin-right: 20px;
  float: right;
  width: 60%;

  @media only screen and (max-width: 700px) {
    width: 79.99999%;
    float: left;
    display: block;
    padding: 0.1rem calc((100vw - 500px) / 2);
  }

  @media only screen and (max-width: 500px) {
    width: 69.99999%;
    display: block;
    float: left;
    padding: 0.1rem calc((100vw - 500px) / 2);
  }
`
