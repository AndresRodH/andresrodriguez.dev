import fetch from 'isomorphic-unfetch'
import {PostStats} from 'pages/api/post-stats/[id]'

export async function getPostStats(
  _key: string,
  id: string,
): Promise<PostStats> {
  const stats = await fetch(`/api/post-stats/${id}`).then((r) => r.json())

  return stats
}

export async function incrementViews(id: string): Promise<PostStats> {
  const stats = await fetch(`/api/post-stats/${id}/view`, {
    method: 'POST',
  }).then((r) => r.json())

  return stats
}
