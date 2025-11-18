import { QuizAnswers } from '../../../models/spam'

interface Props {
  answers: QuizAnswers
}

function ResultPage({ answers }: Props) {
  // TODO: Find and use some middleware from the 'client/utils' folder
  // which will help you calculate the user's quiz result.

  // TODO: Replace the following hardcoded data with real results data from backend API endpoint
  const result = {
    id: 1,
    name: 'Fake Spam Flavour ',
    image: 'fake-spam.jpeg',
    info: 'fake information about this spam flavour',
  }

  if (result) {
    return (
      <>
        <section className="flex flex-col items-center justify-center p-5">
          <h1 className="pt-20 font-heading text-heading-lg font-heading-bold text-spamBlue">
            You are just like: {result.name}!
          </h1>
          <img src={`/images/hero_images/${result.image}`} alt="" />
          <p className="m-4 mx-60 pb-20  font-body text-body-md">
            {result.info}
          </p>
        </section>
      </>
    )
  }
}
export default ResultPage
