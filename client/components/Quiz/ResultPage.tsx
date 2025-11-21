import { useState, useEffect } from 'react'
import { QuizAnswers, QuizResult } from '../../../models/spam'
import calculateQuiz from '../../utils/calculateQuiz'
import { getQuizResult } from '../../apis/quiz'

interface Props {
  answers: QuizAnswers
}

function ResultPage({ answers }: Props) {
  const [result, setResult] = useState<QuizResult | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchResult = async () => {
      try {
        setLoading(true)
        setError(null)

        const category = calculateQuiz(answers)

        const quizResult = await getQuizResult(category)
        setResult(quizResult)
      } catch (err) {
        setError('Failed to load quiz results')
        console.error('Error fetching quiz result:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchResult()
  }, [answers])

  if (loading) {
    return (
      <section className="flex flex-col items-center justify-center p-5">
        <div className="pt-20 font-heading text-heading-lg font-heading-bold text-spamBlue">
          Loading your results...
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="flex flex-col items-center justify-center p-5">
        <div className="pt-20 font-heading text-heading-lg font-heading-bold text-red-500">
          {error}
        </div>
      </section>
    )
  }

  if (result) {
    return (
      <>
        <section className="flex flex-col items-center justify-center p-5">
          <h1 className="pt-20 font-heading text-heading-lg font-heading-bold text-spamBlue">
            You are just like: {result.name}!
          </h1>
          <img src={`/images/hero_images/${result.image}`} alt={result.name} />
          <p className="m-4 mx-60 pb-20  font-body text-body-md">
            {result.info}
          </p>
        </section>
      </>
    )
  }

  return null
}
export default ResultPage
