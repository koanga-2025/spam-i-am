import { Router } from 'express'

import * as db from '../db/queries/quiz'

const router = Router()

// GET: /api/v1/quiz/
router.get('/', async (req, res) => {
  try {
    const questions = await db.getAllQuestionsAndOptions()
    res.json(questions)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no questions' })
  }
})

// TODO:
// Create a GET route for quiz results by category and
// handle errors such as a non existent category being passed
// in as a param.
// GET: /api/v1/quiz/:category
router.get('/:category', async (req, res) => {
  const { category } = req.params
  try {
    const result = await db.getQuizResultByCategory(category)
    if (!result) {
      return res.status(404).json({ message: 'Category not found' })
    }
    res.json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error retrieving questions' })
  }
})

export default router
