import React from "react"
import { navigate, Link } from "gatsby"
import Flex from "./Flex"
import Logo from "./Logo.inline.svg"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

const NavLink = styled(Link).attrs({
  activeStyle: {
    borderBottom: "2px solid white",
  },
  partiallyActive: true,
})`
  border-bottom: 2px solid transparent;
  color: white;
  text-decoration: none;
`

function Nav() {
  return (
    <Flex
      as="nav"
      backgroundColor="palevioletred"
      justifyContent="space-between"
      alignItems="center"
      p={`0 ${rhythm(0.5)} 0 0`}
    >
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
        <NavLink to="/blog">Blog</NavLink>
      </Flex.Item>
    </Flex>
  )
}

export default Nav
