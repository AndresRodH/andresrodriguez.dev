function Entry({
  title,
  children,
}: {
  title: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div
      className="grid items-center justify-start gap-2 py-2 gap-x-4"
      style={{
        gridTemplateAreas: `
          'icon title'
          ' . description'
        `,
      }}
    >
      <div style={{gridArea: 'icon'}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="flex w-6 h-6"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            className="text-teal-400 fill-current"
          />
          <path
            className="text-teal-800 fill-current"
            d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
          />
        </svg>
      </div>
      <h4
        style={{gridArea: 'title'}}
        className="my-0 font-semibold text-gray-900"
      >
        {title}
      </h4>
      {children && (
        <p style={{gridArea: 'description'}} className="my-0 text-gray-700">
          {children}
        </p>
      )}
    </div>
  )
}

const TimelineWrapper = ({children}: {children: React.ReactNode}) => (
  <div className="divide-y">{children}</div>
)
const Year = ({children}: {children: React.ReactNode}) => (
  <h3 className="mt-0 text-xl font-semibold text-gray-900">{children}</h3>
)
const Section = ({children}: {children: React.ReactNode}) => (
  <div className="grid grid-cols-1 gap-2 py-4">{children}</div>
)

export const Timeline = Object.assign(TimelineWrapper, {Entry, Year, Section})
