import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'

export default function Link({ className = '', ...props }) {
  return (
    <GatsbyLink
      {...props}
      activeClassName="active"
      className={`${className.trim()} hover:text-blue-500`}
    />
  )
}
