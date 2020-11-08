import Link from 'next/link'
import {Logo} from './logo'

export function Header() {
  return (
    <header>
      <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-8 py-10 flex justify-between items-center">
        <Logo />
        <div className="grid grid-rows-1 gap-4 grid-cols-2">
          <Link href="/about">About</Link>
          <Link href="/uses">Uses</Link>
        </div>
      </div>
    </header>
  )
}
