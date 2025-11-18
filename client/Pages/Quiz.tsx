import { useState } from 'react'
import { QuizAnswers } from '../../models/spam'
import QuizStartPage from '../components/Quiz/QuizStartPage'
import { useQuestions } from '../hooks/useQuestions'
import QuizBody from '../components/Quiz/QuizBody'
import { Link } from 'react-router-dom'
import Button from '../components/UI/Button'

function Quiz() {
  const [start, setStart] = useState(true)
  const [quizzes, setQuizzes] = useState(false)
  const [answers, setAnswers] = useState<QuizAnswers>({
    a1: null,
    a2: null,
    a3: null,
    a4: null,
    a5: null,
  })

  const { data, isError } = useQuestions()
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <p>Something went wrong</p>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </div>
    )
  }

  if (data)
    return (
      <>
        {start && <QuizStartPage setStart={setStart} setQuizzes={setQuizzes} />}
        {quizzes && (
          <QuizBody
            questions={data}
            answers={answers}
            setAnswers={setAnswers}
          />
        )}
      </>
    )
}

export default Quiz
