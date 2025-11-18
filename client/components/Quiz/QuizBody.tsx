import { useState } from 'react'
import { QuizAnswers, QuizQuestions, QuizOption } from '../../../models/spam'
import ResultPage from './ResultPage'
import Button from '../UI/Button'

interface Props {
  questions: QuizQuestions[]
  answers: QuizAnswers
  setAnswers: React.Dispatch<React.SetStateAction<QuizAnswers>>
}

function QuizBody({ questions, answers, setAnswers }: Props) {
  const [counter, setCounter] = useState(0)
  const [showResult, setShowResult] = useState(false)

  function handleAnswerChange(option: QuizOption) {
    // we want to record the category the answer is associated with,
    // so that we can determine the correct personality type for the user (i.e. mostly a's, mostly b's)
    const optionCategory = option.category
    const key = `a${counter + 1}` as keyof QuizAnswers
    setAnswers((prev) => ({ ...prev, [key]: optionCategory }))
    handleNextQuestion()
  }

  function handleNextQuestion() {
    if (counter === questions.length - 1) {
      setShowResult(true)
    } else if (counter < questions.length - 1) {
      setCounter((prev) => prev + 1)
    }
  }

  function handlePreviousQuestion() {
    if (counter > 0) {
      setCounter((prev) => prev - 1)
    }
  }

  // Function to handle click and keydown events for accessibility
  function handleClick(option: QuizOption) {
    handleAnswerChange(option)
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLElement>,
    option: QuizOption,
  ) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(option)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {showResult && <ResultPage answers={answers} />}
      {!showResult && (
        <section
          key={questions[counter].id}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="pt-20 font-heading text-heading-lg font-heading-bold text-spamBlue">
            {questions[counter].question}
          </h1>
          <div className="grid grid-cols-2 gap-8 p-6">
            {questions[counter].options.map((option, index) => (
              <>
                <section
                  key={`option ${index}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleClick(option)}
                  onKeyDown={(event) => handleKeyDown(event, option)}
                  className="flex flex-col items-center justify-center rounded-md bg-spamBlue p-10"
                >
                  <img
                    src={`/images/quiz_options/${option.image}`}
                    alt=""
                    className="h-44 w-44 object-cover"
                  />
                  <p className="mt-4 rounded-md bg-spamYellow p-4">
                    {option.text}
                  </p>
                </section>
              </>
            ))}
          </div>
          <Button onClick={handlePreviousQuestion} disabled={counter === 0}>
            Go back
          </Button>
        </section>
      )}
    </div>
  )
}

export default QuizBody
