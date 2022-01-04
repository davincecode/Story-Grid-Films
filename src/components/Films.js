import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Films = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query FilmsQuery {
      allFilmsJson {
        edges {
          node {
            alt
            button
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
          <FeatureInfo></FeatureInfo>
        </FeatureCard>
      )
    })
    return filmsArray
  }

  return (
    <FeatureContainer>
      <FeatureHeading>{heading}</FeatureHeading>
      <FeatureWrapper>{getFilms(data)}</FeatureWrapper>
    </FeatureContainer>
  )
}

export default Films

const FeatureContainer = styled.div`
  padding: 1rem calc((100vw - 1300px) / 2);
  background: #f9f6f2;
  }
`
const FeatureHeading = styled.div`
  font-family: Lora;
  font-size: clamp(1.2rem, 1.8vw, 1.5rem);
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 2rem;
  color: #545454;
`
const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 5rem;
    min-height: 100vw;
  }
`

const FeatureCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 400px;
  position: relative;
  transition: 0.2s ease;
`

const FeatureImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  filter: brightness(100%);
  transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(80%);
  }
`

const FeatureInfo = styled.div``
