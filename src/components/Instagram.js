import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query IgQuery {
      allInstagramContent {
        edges {
          node {
            localImage {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)
  let arrayOfInstaImages = _get(data, "allInstagramContent.edges")

  return (
    <InstagramBox>
      <ColumnOne>
        <h3>Follow us on Instagram</h3>
      </ColumnOne>
      <ColumnTwo>
        <InstaStyle>
          {arrayOfInstaImages.map((item, i) => {
            return (
              <div
                key={i}
                style={{ width: "200px", height: "200px", margin: "5px" }}
              >
                <Img fixed={item.node.localImage.childImageSharp.fixed} />
              </div>
            )
          })}
        </InstaStyle>
      </ColumnTwo>
    </InstagramBox>
  )
}

export default Instagram

const InstagramBox = styled.div`
  margin-left: 30%;
  transform: translateX(-20%);
  overflow: hidden;
  background: #f9f6f2;

  @media screen and (max-width: 500px) {
    margin-left: 15%;
    transform: translateX(-10%);
  }
`

const InstaStyle = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
`

const ColumnOne = styled.div`
  font-size: clamp(0.8rem, 1.8vw, 1.5rem);
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: #545454;

  @media screen and (max-width: 500px) {
    h3 {
      font-size: 16px;
    }
  }
`

const ColumnTwo = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: flex-end;
  width: 200px;
  flex-direction: column;
  gap: 10%;

  @media screen and (max-width: 500px) {
  }
`
