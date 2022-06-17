import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Films = ({ heading, subheading }) => {
  const data = useStaticQuery(graphql`
    query FilmsQuery {
      allFilmsJson {
        edges {
          node {
            alt
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    
  `)

  function getFilms(data) {
    const filmsArray = []
    data.allFilmsJson.edges.forEach((item, index) => {
      filmsArray.push(
        <FeatureCard key={index}>
          <FeatureImg
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
        </FeatureCard>
      )
    })
    return filmsArray
  }

  return (
    <FeatureContainer>
      <FeatureHeading>{heading}</FeatureHeading>
      <SubFeatureHeading>{subheading}</SubFeatureHeading>
      <FeatureWrapper>{getFilms(data)}</FeatureWrapper>
    </FeatureContainer>
  )
}

export default Films

const FeatureContainer = styled.div`
  padding: 1rem calc((100vw - 1300px) / 2);
  background: #f9f6f2;
`
const FeatureHeading = styled.div`
  font-family: Lora;
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  text-align: center;
  letter-spacing: 2px;
  padding: 2rem 2rem 0 2rem;
  color: #545454;
`

const SubFeatureHeading = styled.div`
  font-family: Lora;
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  text-align: center;
  letter-spacing: 2px;
  padding: 0 2rem 2rem 2rem;
  color: #545454;
`
const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  justify-items: center;
  padding: 2rem;

  @media screen and (min-width: 375px) and (max-width: 768px) {
    grid-template-columns: 1fr;
    display: grid;
    justify-content: center;
    height: 100%;
    width: 100%;
    object-fit: cover;
    gap: 10px;
    padding: 2rem;
  }
`

const FeatureCard = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  width: 100%;
  object-fit: cover;
  gap: 10px;
`

const FeatureImg = styled(Img)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  height: auto;
  width: 100%;
  object-fit: cover;

  @media screen and (min-width: 769px) and (max-width: 6175px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-self: center;
    height: 100%;
    width: 100%;
    object-fit: cover;
    gap: 1px;
    padding: 2rem;
  }
`
