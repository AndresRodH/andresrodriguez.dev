import React from "react"
import { navigate } from "gatsby"
import Flex from "./Flex"
import Logo from "./Logo.inline.svg"
import { rhythm } from "../utils/typography"

function Nav() {
  return (
    <Flex backgroundColor="palevioletred" alignItems="center">
      <Logo
        onClick={() => navigate("/")}
        style={{
          display: "flex",
          cursor: "pointer",
          height: rhythm(2.5),
          width: rhythm(2.5),
        }}
      />
    </Flex>
  )
}

export default Nav
