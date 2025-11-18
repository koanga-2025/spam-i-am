import { useState } from 'react'
import SpamJump from '../components/Games/SpamJump'
import WhackASpam from '../components/Games/WhackASpam'
import Button from '../components/UI/Button'
import Snake from '../components/Games/Snake'

function Games() {
  const [activeGame, setActiveGame] = useState('')

  const games = ['Spam Jump', 'Whack-A-Spam', 'Snake']

  return (
    <>
      <section className="flex flex-col items-center justify-center p-5">
        <h1>Choose a game!</h1>
        <nav>
          {games.map((game) => (
            <Button key={game} onClick={() => setActiveGame(game)}>{game}</Button>
          ))}
        </nav>

        <main>
          {activeGame === 'Spam Jump' && <SpamJump />}
          {activeGame === 'Whack-A-Spam' && <WhackASpam />}
          {activeGame === 'Snake' && <Snake />}
        </main>
      </section>
    </>
  )
}

export default Games
