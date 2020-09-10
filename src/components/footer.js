import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import twin from 'twin.macro'

const A = twin.a`text-blue-500 font-bold border-b-2 border-blue-500`

export default function Footer() {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
          image
          description
          social {
            twitter
          }
        }
      }
    }
  `)

  return (
    <footer className="w-full px-4 py-10">
      <div className="container mx-auto flex lg:justify-center items-center">
        <img
          className="rounded-full h-20 w-20"
          src={data.site.siteMetadata.image}
          alt="Andrés Rodríguez"
        />
        <div className="ml-4">
          <p className="prose prose-lg font-semibold pb-2">
            {data.site.siteMetadata.description}
          </p>
          <div>
            <A
              href="https://twitter.com/andrexish"
              aria-label="Visit my Twitter"
            >
              Twitter
            </A>{' '}
            |{' '}
            <A
              href="https://github.com/andresrodh"
              aria-label="Visit my GitHub"
            >
              Github
            </A>{' '}
            |{' '}
            <A
              href="https://www.linkedin.com/in/andresrodh/"
              aria-label="Visit my LinkedIn"
            >
              LinkedIn
            </A>
          </div>
        </div>
      </div>
    </footer>
  )
}
