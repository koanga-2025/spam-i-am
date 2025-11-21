import db from '../connection' 

export async function getAllQuestionsAndOptions() {
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
      .orderBy('questions.id', 'asc') 
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
export async function getQuizResultByCategory(category:string) {
  try{
   return await db('results')
    .where({ category })
    .first()}
    catch (error) {
    console.error('Error fetching questions with options:', error)
    throw error
  }}

