import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Flex from "../../components/Flex"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import SEO, { SEOProps } from "../../components/SEO"
import BaseCSS from "./BaseCSS"
import theme from "../../theme"

const Content = styled(Flex)`
  min-height: 100vh;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundDark};
`

export const Base: React.FC<SEOProps> = ({ children, ...seo }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO {...seo} />
        <BaseCSS />
        <Content>
          <Nav />
          <Flex.Item flex={2}>{children}</Flex.Item>
          <Footer />
        </Content>
      </>
    </ThemeProvider>
  )
}

export default Base
