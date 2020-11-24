import {NextApiRequest, NextApiResponse} from 'next'
import {db} from 'lib/firebase-admin'

export type PostStats = {
  views: number
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.id)
    return res.status(400).json({
      error:
        'Query parameter "id" is missing from the request, did you forget to include it?',
    })

  if (Array.isArray(req.query.id))
    return res.status(400).json({
      error: 'Multiple ids are not currently supported',
    })

  const postStatsRef = db.collection('posts').doc(req.query.id)

  const postStats = await db.runTransaction<PostStats>(async (t) => {
    const snapshot = await t.get(postStatsRef)

    if (!snapshot.exists) {
      const postStats: PostStats = {
        views: 0,
      }
      t.set(postStatsRef, postStats)
      return postStats
    }

    return snapshot.data() as PostStats
  })

  return res.status(200).json(postStats)
}
