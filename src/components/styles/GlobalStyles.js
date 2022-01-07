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
`
