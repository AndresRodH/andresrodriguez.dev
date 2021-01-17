import {Footer} from 'components/footer'
import {Nav} from 'components/nav'

export function Layout({children}) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
