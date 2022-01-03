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
        <p>Please hit subscribe like and comment</p>
      </ColumnOne>
      <ColumnTwo>
        <InstaStyle>
          {arrayOfInstaImages.map((item, i) => {
            return (
              <div key={i} style={{ width: "200px", height: "200px" }}>
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
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const InstaStyle = styled.div`
  position: relative;
  max-width: 100%;
  display: flex;
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const ColumnTwo = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: flex-end;
  width: 200px;
  flex-direction: column;

  @media screen and (max-width: 500px) {
  }
`
