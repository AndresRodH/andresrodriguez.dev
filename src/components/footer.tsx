import * as React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import twin from 'twin.macro'

const A = twin.a`underline font-bold text-blue-500 border-blue-500`

export function Footer() {
  const data = useStaticQuery<GatsbyTypes.BioQuery>(graphql`
    query Bio {
      site {
        siteMetadata {
          author
          image
          description
          siteUrl
          social {
            twitter
          }
        }
      }
    }
  `)

  const {image, description, siteUrl} = data!.site!.siteMetadata!

  return (
    <footer className="w-full px-4 py-10">
      <div className="container mx-auto flex lg:justify-center items-center">
        <img
          className="rounded-full h-20 w-20"
          src={`${siteUrl}/${image!}`}
          alt="Andrés Rodríguez"
        />
        <div className="ml-4">
          <p className="prose prose-lg font-semibold pb-2">{description}</p>
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
