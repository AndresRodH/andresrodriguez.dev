import React from "react"
import { node } from "prop-types"
import Flex from "../components/Flex"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { createGlobalStyle } from "styled-components"
import SEO from "../components/SEO"

const GlobalCSS = createGlobalStyle`
  html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}
`

function Layout({ children, ...seoProps }) {
  return (
    <>
      <SEO {...seoProps} />
      <GlobalCSS />
      <Flex minHeight="100vh" flexDirection="column">
        <Nav />
        <Flex.Item flex={2}>{children}</Flex.Item>
        <Footer />
      </Flex>
    </>
  )
}

Layout.propTypes = {
  ...SEO.propTypes,
  children: node,
}

export default Layout
