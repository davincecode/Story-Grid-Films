import React from "react";
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import Header from "../components/Header"
import ReactPlayer from 'react-player'
import { recent } from "../data/recent"


const portfolio = () => (
  <Layout>
    <Seo title="Edmonton Wedding Videographer" />
    <Header />
    <Container>
      <h1>FEATURE FILMS</h1>
      { recent.map((item, index) => (
        <div key={ index }>
          <VideoContainer>
            <ReactPlayer
              url={ item.videoLink }
              config={ { vimeo: { playerOptions: { background: false } } } }
              controls={ false }
              />
            <h2>{ item.title }</h2>
            <small>{ item.subtitle }</small>
            <p>{ item.description }</p>
          </VideoContainer>
        </div>
      ))}


    </Container>
  </Layout>
)

export default portfolio

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: #545454;
  width: 100%;

  h1 {
    margin-bottom: 2rem;
  }
`

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 700px;

  h2 {
    font-family: Lora;
    font-size: clamp(1.2rem, 1.8vw, 1.5rem);
    text-align: center;
    letter-spacing: 2px;
    color: #545454;
    padding: 1rem;
  }

  p {
    width: 100%;
    display: flex;
    text-align: center;
    line-height: 1.5rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:2rem;

    h2 {
      font-family: Lora;
      font-size: 1.2rem;
      text-align: center;
      letter-spacing: 2px;
      color: #545454;
      padding: 1rem;
    }

    p {
      width: 100%;
      display: flex;
      text-align: center;
    }
  }
`