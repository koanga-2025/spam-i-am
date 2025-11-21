import { Router } from 'express'
import * as db from '../db/queries/quiz'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const questions = await db.getAllQuestionsAndOptions()
    res.json(questions)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops no questions' })
  }
})
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
