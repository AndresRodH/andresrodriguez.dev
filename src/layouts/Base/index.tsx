import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Nav from "../../components/Nav"
import Footer from "../../components/Footer"
import SEO, { SEOProps } from "../../components/SEO"
import BaseCSS from "./BaseCSS"
import theme from "../../theme"
import { rhythm } from "../../utils/typography"
import Grid from "../../components/Grid"

const PageGrid = styled(Grid)`
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: "nav" "content" "footer";
  min-height: 100vh;
  background-color: ${props => props.theme.background};
`

export const Base: React.FC<SEOProps> = ({ children, ...seo }) => {
  // const [activeTheme, setActiveTheme] = React.useState<"light" | "dark">(() => {
  //   if (window !== undefined) {
  //     if (localStorage.getItem("theme")) {
  //       return localStorage.getItem("theme") as "light" | "dark"
  //     }
  //     return "light"
  //   }
  //   return "light"
  // })

  // const toggleTheme = () =>
  //   setActiveTheme(theme => (theme === "light" ? "dark" : "light"))

  return (
    <ThemeProvider theme={theme.light}>
      <>
        <SEO {...seo} />
        <BaseCSS />
        <PageGrid>
          <Grid.Item gridArea="nav">
            <Nav />
          </Grid.Item>
          <Grid.Item gridArea="content" m={rhythm(1)}>
            {children}
          </Grid.Item>
          <Grid.Item gridArea="footer">
            <Footer />
          </Grid.Item>
        </PageGrid>
      </>
    </ThemeProvider>
  )
}

export default Base
