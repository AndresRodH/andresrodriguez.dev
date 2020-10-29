import * as React from 'react'
import twin from 'twin.macro'
import config from 'config'
import Image from 'next/image'

const A = twin.a`underline font-bold text-blue-500 border-blue-500`
const {description} = config

export function Footer() {
  return (
    <footer className="w-full px-4 py-10">
      <div className="container mx-auto flex lg:justify-center items-center">
        <Image
          className="rounded-full object-cover"
          height={80}
          width={80}
          src="/images/me.jpg"
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
