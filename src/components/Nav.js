import React from "react"
import { navigate } from "gatsby"
import Flex from "./Flex"
import Logo from "./Logo.inline.svg"
import { rhythm } from "../utils/typography"

function Nav() {
  return (
    <nav>
      <Flex
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

        <Flex.Item justifySelf="flex-end">Hai</Flex.Item>
      </Flex>
    </nav>
  )
}

export default Nav
