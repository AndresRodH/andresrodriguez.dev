import {getPostStats} from 'lib/api'
import {useQuery} from 'react-query'

export function ViewCounter({id}: {id: string}) {
  const {data, isLoading} = useQuery(['post-meta', id], getPostStats)

  return <span>{isLoading ? '-----' : data?.views} Views</span>
}
