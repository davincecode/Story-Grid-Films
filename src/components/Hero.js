import React from "react"
import styled from "styled-components"
import Video from "../assets/videos/edmontonWeddingVideo.mp4"

const Hero = () => {
  return (
    <div>
      <HeroContainer>
        <HeroBg>
          <VideoBg
            src={Video}
            type="video/mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </HeroBg>
        <HeroContent>
          <HeroItems>
            <HeroH1>STORY GRID FILMS</HeroH1>
            <HeroP>Edmonton Wedding Cinematographer</HeroP>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </div>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: #f9f6f2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.4) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, transparent 10%);
  }
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vh - 1300px) / 2);
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: 100;
`

const HeroH1 = styled.h1`
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-family: "Lato", san-serif;
  margin-bottom: 0.5rem;
  letter-spacing: 20px;
  padding: 0 1rem;
  font-weight: 400;
  text-align: center;
`

const HeroP = styled.p`
  font-size: clamp(0.8rem, 1vw, 1.5rem);
  font-family: "Lato", san-serif;
  margin-bottom: 2rem;
  font-weight: 100;
`
