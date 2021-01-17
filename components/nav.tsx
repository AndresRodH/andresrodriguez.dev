import {useRouter} from 'next/router'
import Link from 'next/link'
import {Logo} from './logo'
import clsx from 'clsx'

function NavLink({to, children}: {to: string; children: React.ReactNode}) {
  const router = useRouter()

  return (
    <Link href={to}>
      <li
        className={clsx(
          'cursor-pointer px-2 py-1 font-semibold rounded',
          router.pathname === to && 'text-indigo-600 bg-indigo-50',
        )}
      >
        {children}
      </li>
    </Link>
  )
}

export function Nav() {
  return (
    <nav>
      <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-8 py-10 flex justify-between items-center">
        <Logo />
        <ul className="flex space-x-2">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/uses">Uses</NavLink>
        </ul>
      </div>
    </nav>
  )
}
