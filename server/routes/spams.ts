import { Router } from 'express'

import * as db from '../db/queries/spams'

const router = Router()

// GET: /api/v1/spams
router.get('/', async (req, res) => {
  try {
    const spams = await db.getAllSpams()

    res.json({ spams })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no spams' })
  }
})

// GET: /api/v1/spams/:id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const spam = await db.getSpam(Number(id))
    res.json({ spam })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no spam' })
  }
})

// POST: /api/v1/spams
router.post('/', async (req, res) => {
  try {
    const spam = await db.createSpam(req.body)
    res.status(201).json({ spam })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no spam' })
  }
})

// PUT: /api/v1/spams/:id
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.updateSpam(Number(id), req.body)
    res.json({ id })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no spam' })
  }
})

// DELETE: /api/v1/spams/:id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    await db.deleteSpam(Number(id))
    res.json({ id })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no spam' })
  }
})

export default router
