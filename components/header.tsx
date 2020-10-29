import Link from 'next/link'

export function Header() {
  return (
    <header>
      <div className="w-full max-w-screen-lg mx-auto px-4 lg:px-8 py-10 flex justify-between items-center">
        <Link href="/">
          <div className="cursor-pointer text-lg">
            <span className="font-black">Andrés</span>
            <span>Rodríguez</span>
          </div>
        </Link>
        <Link href="/about">About</Link>
      </div>
    </header>
  )
}
