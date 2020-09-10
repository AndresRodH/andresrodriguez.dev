import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  )

  return (
    <header>
      <div className="container mx-auto px-4 lg:px-8 py-10 flex justify-between items-center">
        <Link to="/" className="text-2xl lg:text-4xl font-bold">
          {data.site.siteMetadata.title}
        </Link>
        <Link
          activeClassName="text-blue-500 border-blue-500"
          to="/about"
          className="text-gray-700 font-semibold text-lg lg:text-xl hover:text-blue-500 border-b-2 border-transparent"
        >
          About
        </Link>
      </div>
    </header>
  )
}
