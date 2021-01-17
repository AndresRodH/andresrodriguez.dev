import clsx from 'clsx'
import styles from './timeline.module.css'

function Entry({
  title,
  children,
}: {
  title: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        styles.entry,
        'grid gap-2 gap-x-4 justify-start items-center py-2',
      )}
    >
      <div style={{gridArea: 'icon'}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="flex h-6 w-6"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            className="fill-current text-teal-400"
          />
          <path
            className="fill-current text-teal-800"
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
  <div className="grid grid-cols-1 divide-y">{children}</div>
)
const Year = ({children}: {children: React.ReactNode}) => (
  <h3 className="mt-0 text-xl text-gray-900 font-semibold">{children}</h3>
)
const Section = ({children}: {children: React.ReactNode}) => (
  <div className="grid grid-cols-1 gap-2 py-4">{children}</div>
)

export const Timeline = Object.assign(TimelineWrapper, {Entry, Year, Section})
