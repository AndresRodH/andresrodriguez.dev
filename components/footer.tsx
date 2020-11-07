export function Footer() {
  return (
    <footer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="lg:h-48 w-screen"
      >
        <path
          className="fill-current text-gray-200"
          d="M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,213.3C672,213,768,171,864,165.3C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <div className="bg-gray-200 w-full">
        <div className="prose w-full max-w-screen-lg mx-auto px-4 lg:px-8 py-10 flex flex-col items-center">
          <div className="mb-4">
            <a
              href="https://twitter.com/andrexish"
              aria-label="Visit my Twitter"
            >
              Twitter
            </a>{' '}
            |{' '}
            <a
              href="https://github.com/andresrodh"
              aria-label="Visit my GitHub"
            >
              Github
            </a>{' '}
            |{' '}
            <a
              href="https://www.linkedin.com/in/andresrodh/"
              aria-label="Visit my LinkedIn"
            >
              LinkedIn
            </a>
          </div>
          <small>All content &copy; Andrés Rodríguez</small>
        </div>
      </div>
    </footer>
  )
}
