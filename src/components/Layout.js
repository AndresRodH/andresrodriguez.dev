/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Link from './Link'
import SMI from './SocialMediaIcons'
import { Global, css } from '@emotion/core'

// Emotion's `Global` needs React to be in scope
// eslint-disable-next-line
import React from 'react'

const Container = props => (
  <div
    {...props}
    sx={{
      maxWidth: 'container',
      mx: 'auto',
      px: 4,
    }}
  />
)

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
    <header
      sx={{
        variant: 'textStyles.heading',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link
          to="/"
          sx={{
            fontSize: 5,
            py: 2,
          }}
        >
          {data.site.siteMetadata.title}
        </Link>
        <div sx={{ mx: 'auto' }} />
        <Link to="/about">About</Link>
      </Container>
    </header>
  )
}

function Footer() {
  return (
    <footer
      sx={{
        width: '100%',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'base-line',
          py: 32,
        }}
      >
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <SMI.GitHub />
          <SMI.Twitter sx={{ mx: 16 }} />
          <SMI.LinkedIn />
        </div>
        <div sx={{ mx: 'auto' }} />
        <small>&copy; {new Date().getFullYear()} Andrés Rodríguez</small>
      </Container>
    </footer>
  )
}

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          .twitter-tweet-rendered {
            margin: 1.25rem auto !important;
          }
          @media (max-width: 550px) {
            .twitter-tweet-rendered {
              width: 100% !important;
            }
          }
        `}
      />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Container
          sx={{
            py: 4,
            flex: '1 1 auto',
          }}
        >
          {children}
        </Container>
        <Footer />
      </div>
    </>
  )
}
