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
          <h3>Thanks for being here!</h3>
          <p>
            I'm Vince, a Fine-Art Wedding Photographer and Videographer based in
            Edmonton, Alberta. Also available worldwide where my camera might
            take me. I've been documenting weddings since 2013 and have been
            fortunate enough to be part of the beautiful weddings in Edmonton,
            as well as destination weddings. I hope you take some time and learn
            more about how I can be part of your wedding day. My work has been
            seen in wedding publications; such as Wedding Sparrow, Dear Bride,
            The Knot, Wedding Wire, and much more. Please take a look around the
            website, and I hope we connect soon!
          </p>
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
  flex-direction: column;
  justify-content: center;

  h3 {
    font-family: "FontsFree-Net-RareBirdSpecimenII";
    font-size: clamp(3rem, 1.8vw, 3rem);
    font-weight: 100;
    color: #545454;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: center;
    align-self: center;
  }

  p {
    color: #545454;
    text-align: justify;
    line-height: 2rem;
    padding: 2rem;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    h3 {
      font-family: "FontsFree-Net-RareBirdSpecimenII";
      font-size: clamp(3rem, 1.8vw, 3rem);
      font-weight: 100;
      color: #545454;
      margin-bottom: 2rem;
      align-items: center;
      justify-content: center;
      align-self: center;
    }

    p {
      color: #545454;
      text-align: justify;
      line-height: 2rem;
    }
  }
`

const LeftColumn = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;

  @media screen and (max-width: 375px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Images = styled(Img)`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  object-fit: cover;
`
