import { useState } from 'react'
import SnakeGameBoard from './SnakeGameBoard.tsx'
import SnakeSettings from './SnakeSettings.tsx'

function Snake() {
  const [speedLevel, setSpeedLevel] = useState(1)
  const [obstaclesLevel, setObstaclesLevel] = useState(1)
  const [showComponent, setShowComponent] = useState('difficulty')
  
  const speedValues = [200, 150, 100]
  const obstaclesValues = [0, 3, 5]
  
  const speed = speedValues[speedLevel]
  const numOfObstacles = obstaclesValues[obstaclesLevel]
  
  const gridSize = 10

  if (showComponent === 'difficulty')
    return (
      <SnakeSettings
        speedLevel={speedLevel}
        obstaclesLevel={obstaclesLevel}
        onSpeedChange={setSpeedLevel}
        onObstaclesChange={setObstaclesLevel}
        onPlay={() => setShowComponent('game')}
      />
    )

  if (showComponent === 'game')
    return <SnakeGameBoard {...{ gridSize, speed, numOfObstacles }} />
}

export default Snake