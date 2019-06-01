import React from "react"
import { node } from "prop-types"
import Flex from "../components/Flex"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { createGlobalStyle } from "styled-components"
import SEO from "../components/SEO"

// TODO:
// * Move this
// * Customize PrismJS styles
const GlobalCSS = createGlobalStyle`
  html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}

.gatsby-highlight-code-line {
  background-color: #feb;
  display: block;
  margin-right: -1em;
  margin-left: -1em;
  padding-right: 1em;
  padding-left: 0.75em;
  border-left: 0.25em solid #f99;
}

/**
 * Add back the container background-color, border-radius, padding, margin
 * and overflow that we removed from <pre>.
 */
.gatsby-highlight {
  background-color: #fdf6e3;
  border-radius: 0.3em;
  margin: 0.5em 0;
  padding: 1em;
  overflow: auto;
}

/**
 * Remove the default PrismJS theme background-color, border-radius, margin,
 * padding and overflow.
 * 1. Make the element just wide enough to fit its content.
 * 2. Always fill the visible space in .gatsby-highlight.
 * 3. Adjust the position of the line numbers
 */
.gatsby-highlight pre[class*="language-"] {
  background-color: transparent;
  margin: 0;
  padding: 0;
  overflow: initial;
  float: left; /* 1 */
  min-width: 100%; /* 2 */
}

/* Adjust the position of the line numbers */
.gatsby-highlight pre[class*="language-"].line-numbers {
  padding-left: 2.8em;
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
