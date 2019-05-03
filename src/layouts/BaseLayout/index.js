import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../../theme"
import SEO from "../../components/SEO"

function BaseLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        {children}
      </>
    </ThemeProvider>
  )
}

export default BaseLayout
