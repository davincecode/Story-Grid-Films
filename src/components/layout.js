import React from "react"
import Footer from "./Footer"
import Instagram from "./Instagram"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <main>{children}</main>
      <Instagram />
      <Footer />
    </>
  )
}

export default Layout
