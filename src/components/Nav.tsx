import React from "react"
import { navigate, Link } from "gatsby"
import Flex from "./Flex"
import Logo from "./Logo.inline.svg"
import { rhythm } from "../utils/typography"
import styled from "styled-components"
import Toolbar from "./Toolbar"

const NavLink = styled(Link).attrs({
  activeStyle: {
    opacity: 1,
  },
  partiallyActive: true,
})`
  color: ${props => props.theme.text};
  border-bottom: 2px solid transparent;
  text-decoration: none;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`

function Nav({ toggleTheme }: { toggleTheme: () => void }) {
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
        <button onClick={toggleTheme}>toggle</button>
        <NavLink to="/blog">Blog</NavLink>
      </Flex.Item>
    </Toolbar>
  )
}

export default Nav
