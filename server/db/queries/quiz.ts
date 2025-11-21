import connection from '../connection'
import db from '../connection' 
// QUIZ
export async function getAllQuestionsAndOptions(db = connection) {
  try {
    const result = await db('questions')
      .leftJoin('options', 'questions.id', 'options.question_id')
      .select(
        'questions.id as question_id',
        'questions.question',
        'options.image',
        'options.text',
        'options.category',
      )
      .orderBy('questions.id', 'asc') // Optional: order by question ID

    // Transform the result into a more usable format
    const questionsMap = result.reduce((acc, row) => {
      const { question_id, question, image, text, category } = row

      if (!acc[question_id]) {
        acc[question_id] = {
          id: question_id,
          question,
          options: [],
        }
      }

      if (image && text && category) {
        acc[question_id].options.push({ image, text, category })
      }

      return acc
    }, {})

    return Object.values(questionsMap)
  } catch (error) {
    console.error('Error fetching questions with options:', error)
    throw error
  }
}

// TODO:
// Create a function to get quiz results by category
export async function getQuizResultByCategory(category:string) {
  return db('results')
    .where({ category })
    .first()
}
