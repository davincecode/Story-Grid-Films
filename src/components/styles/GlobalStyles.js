import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  font-family: 'Lora', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html{
  box-sizing: border-box;
  background: #f9f6f2;
}

.infoHero{
  width: 300px;
}

.no-style{
  text-decoration: none;
  color: #545454;
}  

.contactForm{
  height: 745px;
  min-width: 100%;
  max-width: 830px;
  border: 0;
}

.videoPlayer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media screen and (max-width: 375) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

}


`
