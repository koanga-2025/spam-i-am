import Button from '../UI/Button'

interface Props {
  setStart: React.Dispatch<React.SetStateAction<boolean>>
  setQuizzes: React.Dispatch<React.SetStateAction<boolean>>
}

function QuizStartPage({ setStart, setQuizzes }: Props) {
  function startGame() {
    setStart(false)
    setQuizzes(true)
  }

  return (
    <section className="flex flex-col items-center justify-center p-5">
      <h1
        data-testid="quiz-heading"
        className="pt-20 font-heading text-heading-lg font-heading-bold text-spamBlue"
      >
        What flavour of spam are you????
      </h1>
      <Button onClick={startGame}>Start</Button>
    </section>
  )
}

export default QuizStartPage
