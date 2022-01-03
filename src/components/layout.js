import React from "react"
import Footer from "./Footer"
import Header from "./header"
import Instagram from "./Instagram"
import { GlobalStyle } from "./styles/globalStyles"

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
