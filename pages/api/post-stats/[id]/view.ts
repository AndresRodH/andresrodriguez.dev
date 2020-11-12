import {NextApiRequest, NextApiResponse} from 'next'
import {db} from 'lib/firebase-admin'
import {PostStats} from '.'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.id)
    return res.status(400).json({
      error:
        'Query parameter "id" is missing from the request, did you forget to include it?',
    })

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(400).json({
      error: `Method ${req.method} Not Allowed`,
    })
  }

  if (Array.isArray(req.query.id))
    return res.status(400).json({
      error: 'Cannot read multiple posts at once',
    })

  const postStatsRef = db.collection('posts').doc(req.query.id)

  const postStats = await db.runTransaction<PostStats>(async (t) => {
    const snapshot = await t.get(postStatsRef)
    let postStats: PostStats
    if (!snapshot.exists) {
      postStats = {
        views: 1,
      }
      t.set(postStatsRef, postStats)
    } else {
      postStats = snapshot.data() as PostStats
      postStats.views += 1
      t.update(postStatsRef, postStats)
    }

    return postStats
  })

  return res.status(200).json(postStats)
}
