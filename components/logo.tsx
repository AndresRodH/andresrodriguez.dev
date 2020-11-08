import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/">
      <div className="cursor-pointer text-lg">
        <span className="font-black bg-clip-text bg-gradient-to-br from-teal-400 to-indigo-800 text-transparent">
          Andrés
        </span>
        <span>Rodríguez</span>
      </div>
    </Link>
  )
}
