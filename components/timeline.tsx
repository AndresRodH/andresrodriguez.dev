import tw, {styled} from 'twin.macro'

const EntryWrapper = styled.div`
  grid-template-areas:
    'icon title'
    ' . description';
  ${tw`grid gap-2 gap-x-4 justify-start items-center`};
`

function Entry({
  title,
  children,
}: {
  title: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <EntryWrapper>
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
      <h4 style={{gridArea: 'title'}} tw="my-0!">
        {title}
      </h4>
      {children && (
        <p style={{gridArea: 'description'}} tw="my-0!">
          {children}
        </p>
      )}
    </EntryWrapper>
  )
}

const TimelineWrapper = tw.div`grid grid-cols-1 divide-y`
const Year = tw.h3`mt-0!`
const Section = tw.div`grid grid-cols-1 gap-2 py-4`

export const Timeline = Object.assign(TimelineWrapper, {Entry, Year, Section})
