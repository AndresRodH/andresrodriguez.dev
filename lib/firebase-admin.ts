import * as admin from 'firebase-admin'

const projectId =
  process.env.NODE_ENV === 'development'
    ? 'andresrodriguez-dev-develop'
    : 'andresrodriguez-dev'

if (!admin.apps.length)
  admin.initializeApp({
    credential: admin.credential.cert({
      clientEmail: process.env.ADMIN_CLIENT_EMAIL,
      privateKey: (process.env.ADMIN_PRIVATE_KEY as string).replace(
        /\\n/g,
        '\n',
      ),
      projectId,
    }),
    databaseURL: `https://${projectId}.firebaseio.com`,
  })

export const db = admin.firestore()
export const FieldValue = admin.firestore.FieldValue
