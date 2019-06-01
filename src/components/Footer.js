import React from "react"
import Signature from "./Signature.inline.svg"
import Flex from "./Flex"
import { rhythm } from "../utils/typography"

function Footer() {
  return (
    <footer>
      <Flex
        backgroundColor="palevioletred"
        alignItems="center"
        p={`${rhythm(0.5)}`}
      >
        <Signature
          style={{ display: "flex", height: rhythm(2), width: "auto" }}
        />
      </Flex>
    </footer>
  )
}

export default Footer
