import React from "react"
import Flex from "../components/Flex"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../utils/global.css"

function Layout({ children }) {
  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
      style={{ display: "flex", minHeight: "100vh" }}
    >
      <Nav />
      <div className="layout-content">{children}</div>
      <Footer />
    </Flex>
  )
}

export default Layout
