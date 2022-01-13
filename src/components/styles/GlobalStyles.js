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

.youtube-embed{
  margin-top:5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h2{
    padding:1rem;
  }

  p{
    width: 50vw;
    display: flex;
    text-align: justify;
    
  }


}

.contactForm{
  height: 745px;
  min-width: 100%;
  max-width: 830px;
  border: 0;
}


`
