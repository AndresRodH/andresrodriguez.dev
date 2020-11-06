export function Footer() {
  return (
    <footer className="prose w-full max-w-screen-lg mx-auto px-4 lg:px-8 py-10">
      <div className="flex flex-col items-center">
        <div>
          <a href="https://twitter.com/andrexish" aria-label="Visit my Twitter">
            Twitter
          </a>{' '}
          |{' '}
          <a href="https://github.com/andresrodh" aria-label="Visit my GitHub">
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
    </footer>
  )
}
