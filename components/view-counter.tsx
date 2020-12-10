import clsx from 'clsx'
import {getPostStats} from 'lib/api'
import {useQuery} from 'react-query'

export function ViewCounter({
  id,
  className,
  ...props
}: {id: string} & React.HTMLProps<HTMLSpanElement>) {
  const {data, isLoading} = useQuery(['post-stats', id], getPostStats)

  return (
    <span
      className={clsx(
        className,
        'slashed-zero font-semibold text-lg text-gray-600',
      )}
      {...props}
    >
      {isLoading ? '-----' : data?.views.toLocaleString()} views
    </span>
  )
}
