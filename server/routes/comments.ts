import { Router } from 'express'

import * as db from '../db/queries/comments.ts'
import checkJwt from '../auth0.ts'
import { JwtRequest } from '../auth0.ts'

const router = Router()

// This is a publicly visible route:
// GET: /api/v1/comments/2 - Get all comments by spamId
router.get('/:spamId', async (req, res) => {
  try {
    const { spamId } = req.params
    const comments = await db.getCommentsBySpamId(Number(spamId))
    res.json({ comments })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no comments' })
  }
})

// This is a protected route - use checkJwt middleware:
// POST: /api/v1/comments
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  const { spamId, comment } = req.body
  const userId = req.auth?.sub // this is coming from the header we set in the client/apis/ratings.ts request
  console.log('userId route', userId)

  if (!userId) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }
  try {
    const newComment = await db.createComment(Number(spamId), comment, userId)
    res.status(201).json({ newComment })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops could not create comment' })
  }
})
// -------
// Testing this POST route in THUNDERCLIENT:
// JSON BODY:
// {
//   "spamId": 2,
//   "comment": "Gross."
// }
// AUTH BEARER TOKEN for using in Thunderclient:
// eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImxrMFcyTzFkWGNrVldvYllVZXlRWiJ9.eyJpc3MiOiJodHRwczovL3NwYW0tbWF0YWktMjAyNC5hdS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjZjYmM4ODRlN2MwYmRiMzVhOGI5NzZhIiwiYXVkIjpbImh0dHBzOi8vc3BhbS9hcGkiLCJodHRwczovL3NwYW0tbWF0YWktMjAyNC5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNzI0NzM1NDc4LCJleHAiOjE3MjQ4MjE4NzgsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJhenAiOiJXcTROTTllYmJIVlBHVDZLSGQzbnE1RVZlV3dXSFQ1YyJ9.oz48gOmE4Iku8FNwpCKm9SHhszh37cQXypsfUDw0VAGxZ0T_cHgviHUdlSPNb_HFhxIOavWrCerXcBMbkA4cHunSDPzygcOkoKMq9WuqEHS1LiOjqWOEWWDi2IZGGKeQt1qxS80X4B-DWBTE_SLu2RY5i0L_rpD07Ru3EFAbLvGzUVE9pWWkvwGXJt15VajLWs8iRNQ6FmYku1mnLEuBnJ6DzHT2OSSvVmqRfxRmtRvoE9e8duzFs-2CbKGoz4myNX_h2jeD0oHaqJjLdP74ymMEgwFIZSqF81OPAZS6VLXdgvtm987FCu8WnSbgj714n88Dtyqv1JyOdKdJOa_EkA
// -------

// TODO:
// PATCH `/api/v1/comments/:id`
router.patch('/:id', async (req, res) => {})

// TODO:
// DELETE: /api/v1/comments/:id
router.delete('/:id', async (req, res) => {})

export default router
