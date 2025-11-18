import { useState } from 'react'
import SnakeGameBoard from './SnakeGameBoard.tsx'
import Button from '../UI/Button'

function Snake() {
  const speed = 150
  const numOfObstacles = 3
  const [showComponent, setShowComponent] = useState('difficulty')
  
  const gridSize = 10

  if (showComponent === 'difficulty')
    return (
      <>
        <p>Speed:</p>
        {/* TODO: Make a slider go here */}
        <hr/>
        <br/>
        <p>Number of Obstacles:</p>
        {/* TODO: Make a slider go here */}
        <hr />
        <br />
        <ul>
          <li>Use Arrow keys to move</li>
          <li>Eat spam to grow and increase your score </li>
          <li>Avoid tofu as it will kill you (allergies)</li>
        </ul>
        <Button onClick={() => setShowComponent('game')}>Play</Button>
      </>
    )

  if (showComponent === 'game')
    return <SnakeGameBoard {...{ gridSize, speed, numOfObstacles }} />
}

export default Snake