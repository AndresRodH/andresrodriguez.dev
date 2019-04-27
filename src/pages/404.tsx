import React from "react"
import { Link } from "gatsby"
import BaseLayout from "../layouts/BaseLayout"

export default function NotFound() {
  return (
    <BaseLayout>
      NOT IMPLEMENTED
      <Link style={{ fontSize: 16 }} to="/">
        Take me back!
      </Link>
    </BaseLayout>
  )
}
