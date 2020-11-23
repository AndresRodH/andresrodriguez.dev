import {useRouter} from 'next/router'
import Link from 'next/link'
import {Logo} from './logo'
import clsx from 'clsx'

function NavLink({to, children}: {to: string; children: React.ReactNode}) {
  const router = useRouter()

  return (
    <Link href={to}>
      <span
        className={clsx(
          'cursor-pointer',
          router.pathname === to && 'font-semibold text-teal-600',
        )}
      >
        {children}
      </span>
    </Link>
  )
}

export function Nav() {
  return (
    <nav>
      <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-8 py-10 flex justify-between items-center">
        <Logo />
        <div className="grid grid-rows-1 gap-4 text-center grid-cols-2">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/uses">Uses</NavLink>
        </div>
      </div>
    </nav>
  )
}
