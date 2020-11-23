import {Footer} from 'components/footer'
import {Nav} from 'components/nav'

export function Layout({children}) {
  return (
    <div
      className="grid min-h-screen"
      style={{gridTemplateColumns: '1fr', gridTemplateRows: 'auto 1fr auto'}}
    >
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
