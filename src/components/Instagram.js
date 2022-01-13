import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import _get from "lodash/get"
import { Link } from "gatsby"

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
    <Container>
      <ColumnOne>
        <h3>Follow us on Instagram</h3>
        <Link
          to="https://instagram.com/vincentybanezphoto"
          className="no-style"
        >
          @vincentybanezphoto
        </Link>
      </ColumnOne>

      <ColumnTwo>
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
      </ColumnTwo>
    </Container>
  )
}

export default Instagram

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: 2rem;
  margin-bottom: 2rem;
  height: 34vh;
  width: 100vw;
`

const ColumnOne = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #545454;

  @media screen and (max-width: 768px) {
    padding: 5rem;
    h3 {
      font-size: 16px;
    }
  }
`

const ColumnTwo = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  overflow: hidden;
  height: 34vh;
  width: 30vw;
  gap: 1px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;

    height: 10vh;
    width: 54vw;
    gap: 1px;
  }
`
