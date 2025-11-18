import { Router } from 'express'

import * as db from '../db/queries/about'

const router = Router()

// GET: /api/v1/about/text
router.get('/text', async (req, res) => {
  try {
    const text = await db.getAllAboutText()
    res.json(text)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no text' })
  }
})

// GET: /api/v1/about/images
router.get('/images', async (req, res) => {
  try {
    const images = await db.getAllAboutImages()
    res.json(images)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no images' })
  }
})

export default router
