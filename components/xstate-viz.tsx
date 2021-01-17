export function XStateViz({gist}: {gist: string}) {
  return (
    <div className="h-96 -mx-8 relative">
      <iframe
        title={`State Machine ${gist}`}
        src={`https://xstate.js.org/viz/?gist=${gist}&embed=1`}
        className="absolute top-0 w-full h-full shadow-lg border sm:rounded-lg"
      />
    </div>
  )
}
