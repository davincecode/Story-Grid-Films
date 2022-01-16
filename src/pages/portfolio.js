import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import Navdark from "../components/Navdark"
import ReactPlayer from "react-player/youtube"

const portfolio = () => (
  <Layout>
    <Seo title="Edmonton Wedding Videographer" />
    <Navdark />
    <Container>
      <h1>FEATURE FILMS</h1>
      <section className="videoPlayer">
        <ReactPlayer url="https://youtu.be/A-aayI-__tE" />
      </section>
      <VideoContainer>
        <h2>Taylor & Viktoriya | Vancouver Wedding Videographer</h2>
        <p>
          A beautiful Fine Art Wedding at Hycroft Manor in Vancouver. Such an
          honour to document Taylor & Viktoriya's wedding in Vancouver. Wedding
          videographer in Vancouver.
        </p>
      </VideoContainer>
      <section className="videoPlayer">
        <ReactPlayer url="https://youtu.be/S0j0y5lTYww" />
      </section>
      <VideoContainer>
        <h2>Jenner and Grace | The Crossing at Ghost River | Cochrane</h2>
        <p>
          A beautiful Fine Art Wedding at The Crossing at Ghost River in
          Cochrane, Alberta. Such an honour to document Jenner and Grace's
          wedding in Cochrane. Wedding videographer in Cochrane.
        </p>
      </VideoContainer>
      <section className="videoPlayer">
        <ReactPlayer url="https://youtu.be/uwPMw5fI_Jk" />
      </section>
      <VideoContainer>
        <h2>Geof & Kelly | Edmonton Wedding Videography</h2>
        <p>
          A beautiful Fall Wedding in Edmonton, Alberta. Such an honour to
          document Geoff and Kelly's fall season wedding in Edmonton. Wedding
          videographer in Edmonton.
        </p>
      </VideoContainer>
      <section className="videoPlayer">
        <ReactPlayer url="https://youtu.be/MDaUpE6TOmw" />
      </section>
      <VideoContainer>
        <h2>Dakota and Lindsey | Edmonton Wedding Videography</h2>
        <p>
          A beautiful Laid-Back wedding in Edmonton. Such an honour to document
          Dakota and Lindesy's wedding in Edmonton. Wedding videographer in
          Edmonton.
        </p>
      </VideoContainer>
      <section className="videoPlayer">
        <ReactPlayer url="https://youtu.be/41oTD44h5Ss" />
      </section>
      <VideoContainer>
        <h2>Great outdoor wedding location in St. Albert</h2>
        <p>
          Now that the Covid restrictions are being lifted, organizing a wedding
          can be extremely stressful. Some couples are still opting for venues
          that offer good ventilation or outdoor spaces for their elderly
          guests. With the recent boom in wedding inquiries, our industry
          friends are scrambling to coordinate for those that are postponed in
          2020 and the newly engaged. I put together this post to help you with
          the first step, check out my favourite outdoor wedding venues in and
          around Edmonton.
        </p>
      </VideoContainer>
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
    text-align: justify;
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
      text-align: justify;
      margin-bottom: 4rem;
    }
  }
`
