import React from "react"
import { node } from "prop-types"
import Flex from "../../components/Flex"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import SEO from "../../components/SEO"
import GlobalCSS from "./GlobalStyles"

function Base({ children, ...seo }) {
  return (
    <>
      <SEO {...seo} />
      <GlobalCSS />
      <Flex minHeight="100vh" flexDirection="column">
        <Nav />
        <Flex.Item flex={2}>{children}</Flex.Item>
        <Footer />
      </Flex>
    </>
  )
}

Base.propTypes = {
  ...SEO.propTypes,
  children: node,
}

export default Base
