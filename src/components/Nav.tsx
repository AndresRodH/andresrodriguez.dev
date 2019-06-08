import React from "react"
import { navigate, Link } from "gatsby"
import Flex from "./Flex"
import Logo from "./Logo.inline.svg"
import SunSVG from "./Sun.inline.svg"
import MoonSVG from "./Moon.inline.svg"
import { rhythm } from "../utils/typography"
import styled, { css } from "styled-components"
import Toolbar from "./Toolbar"

const navItemCSS = css`
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`

const NavLink = styled(Link).attrs({
  activeStyle: {
    opacity: 1,
  },
  partiallyActive: true,
})`
  color: ${props => props.theme.text};
  text-decoration: none;
  margin-left: ${rhythm(0.5)};
  ${navItemCSS}
`

const Sun = styled(SunSVG)`
  cursor: pointer;
  ${navItemCSS}
`
const Moon = Sun.withComponent(MoonSVG)

type Props = {
  activeTheme: "light" | "dark"
  toggleTheme: () => void
}
function Nav({ toggleTheme, activeTheme }: Props) {
  const ToggleButton =
    activeTheme === "light" ? (
      <Moon onClick={toggleTheme} />
    ) : (
      <Sun onClick={toggleTheme} />
    )

  return (
    <Toolbar as="nav">
      <Logo
        onClick={() => navigate("/")}
        style={{
          display: "flex",
          cursor: "pointer",
          height: rhythm(2.5),
          width: rhythm(2.5),
        }}
      />

      <Flex.Item justifySelf="flex-end">
        <Flex alignItems="center">
          {ToggleButton}
          <NavLink to="/blog">Blog</NavLink>
        </Flex>
      </Flex.Item>
    </Toolbar>
  )
}

export default Nav
