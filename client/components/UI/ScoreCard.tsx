interface Props {
  score: number
}

function ScoreCard({ score }: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-md bg-spamBlue p-7 text-spamYellow">
      <h1 className="font-body text-body-md">FINAL SCORE: </h1>
      <p className="text-body-xl font-body-bold">{score}</p>
    </div>
  )
}
export default ScoreCard
