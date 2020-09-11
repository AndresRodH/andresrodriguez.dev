import * as React from 'react'
import {Footer} from 'components/footer'
import {Header} from 'components/header'

export default function Layout({children}) {
  return (
    <div
      className="grid min-h-screen"
      style={{gridTemplateColumns: '1fr', gridTemplateRows: 'auto 1fr auto'}}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}
