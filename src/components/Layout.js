import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from './Link'
import SMI from './SocialMediaIcons'

function Header() {
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
      <div className="container mx-auto px-4 py-10 flex justify-between items-center">
        <Link to="/" className="text-2xl lg:text-4xl font-bold">
          {data.site.siteMetadata.title}
        </Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="w-full px-4 py-10">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex justify-between items-center">
          <SMI.GitHub />
          <SMI.Twitter className="mx-4" />
          <SMI.LinkedIn />
        </div>
        <div className="mx-auto" />
        <span>&copy; {new Date().getFullYear()} Andrés Rodríguez</span>
      </div>
    </footer>
  )
}

export default function Layout({ children }) {
  return (
    <div
      className="grid min-h-screen"
      style={{ gridTemplateColumns: '1fr', gridTemplateRows: 'auto 1fr auto' }}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}
