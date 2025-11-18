import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import * as db from '../db/queries/users.ts'

const router = Router()

// POST /api/v1/users - Create or update a user
router.post('/', checkJwt, async (req: JwtRequest, res) => {
  const auth0Id = req.auth?.sub
  const { userName, email } = req.body

  if (!auth0Id) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  try {
    const user = await db.upsertUser(auth0Id, userName, email)
    res.status(201).json(user)
  } catch (error) {
    console.error('Error creating/updating user:', error)
    res.status(500).json({ message: 'Failed to create/update user' })
  }
})

// GET /api/v1/users/:auth0Id - Get a user by auth0_id
router.get('/:auth0Id', async (req, res) => {
  const { auth0Id } = req.params

  try {
    const user = await db.getUserByAuth0Id(auth0Id)
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    console.error('Error fetching user:', error)
    res.status(500).json({ message: 'Failed to fetch user' })
  }
})

export default router
