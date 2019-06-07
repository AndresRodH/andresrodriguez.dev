import * as React from "react"
import Flex from "../../components/Flex"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import SEO, { SEOProps } from "../../components/SEO"
import BaseCSS from "./BaseCSS"

export const Base: React.FC<SEOProps> = ({ children, ...seo }) => {
  return (
    <>
      <SEO {...seo} />
      <BaseCSS />
      <Flex minHeight="100vh" flexDirection="column">
        <Nav />
        <Flex.Item flex={2}>{children}</Flex.Item>
        <Footer />
      </Flex>
    </>
  )
}

export default Base
