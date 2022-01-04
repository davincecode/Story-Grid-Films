import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Instagram from "./Instagram"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Instagram />
      <Footer />
    </>
  )
}

export default Layout
