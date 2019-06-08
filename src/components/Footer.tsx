import React from "react"
import Signature from "./Signature.inline.svg"
import Flex from "./Flex"
import { rhythm } from "../utils/typography"
import Toolbar from "./Toolbar"

function Footer() {
  return (
    <Toolbar as="footer">
      <Flex alignItems="center" p={`${rhythm(0.5)}`}>
        <Signature
          style={{
            display: "flex",
            height: rhythm(2),
            width: "auto",
          }}
        />
      </Flex>
    </Toolbar>
  )
}

export default Footer
