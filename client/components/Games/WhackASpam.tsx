import { useEffect, useState } from 'react'
import Table from '../UI/Table'
import getRandomNumber from '../../utils/getRandomNumber'
import playAudio from '../../utils/playAudio'
import useCountdownTimer from '../../utils/useCountdownTimer'
import formatTimer from '../../utils/formatTimer'
import ScoreCard from '../UI/ScoreCard'

function WhackASpam() {
  const [selectedCell, setSelectedCell] = useState<null | number>(null)
  const [score, setScore] = useState<number>(0)
  const [gameOver, setGameOver] = useState<boolean>(false)

  const timer = useCountdownTimer(120)

  useEffect(() => {
    chooseRandomCell() // Choose a random cell on component mount

    const intervalId = setInterval(() => {
      chooseRandomCell() // Choose a random cell every second
    }, 1000)

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    if (timer === 0) {
      setGameOver(true)
    }
  }, [timer])

  function chooseRandomCell() {
    let randomCell = getRandomNumber(0, 16)
    setSelectedCell(randomCell)
  }

  function whackThatSpam() {
    playAudio('./sounds/squish_sound.mp3')
    setScore(score + 1)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>WHACK A SPAM</h1>
      {gameOver ? (
        <ScoreCard score={score} />
      ) : (
        <>
          <p>Time left: {formatTimer(timer)}</p>
          <p>Score: {score}</p>
          <Table
            selectedCell={selectedCell}
            image={'./images/14-classic2.png'}
            whackThatSpam={whackThatSpam}
          />
        </>
      )}
    </div>
  )
}

export default WhackASpam
