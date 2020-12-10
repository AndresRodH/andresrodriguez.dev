import 'twin.macro'

export function XStateViz({gist}: {gist: string}) {
  return (
    <iframe
      title={`State Machine ${gist}`}
      src={`https://xstate.js.org/viz/?gist=${gist}&embed=1`}
      className="w-full h-96 shadow-lg border rounded-lg"
    />
  )
}
