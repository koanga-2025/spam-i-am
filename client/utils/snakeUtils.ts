import getRandomNumber from "./getRandomNumber"

export function randomCoords(gridSize: number, num: number, toBeOmitted: string[] = []): string[] {
  const coords: string[] = []
  const omit = [...toBeOmitted]

  for (let i = 0; i < num; i++) {
    const currentCoord = createCoord()
    coords.push(currentCoord)
    omit.push(currentCoord)
  }

  function createCoord(): string {
    const currentCoord = `${getRandomNumber(0, gridSize - 1)}${getRandomNumber(0, gridSize - 1)}`
    return omit.includes(currentCoord) ? createCoord() : currentCoord
  }
  return coords
}

export function nextPosition(head: string, direction: string, gridSize: number, setGameState: React.Dispatch<React.SetStateAction<string>>): string | null {
  const headRow = Number(head[0])
  const headCol = Number(head[1])
  let nextRow = headRow
  let nextCol = headCol

  switch (direction) {
    case 'up':
      if (headRow === 0) {
        setGameState('dead')
      } else nextRow--
      break
    case 'down':
      if (headRow === gridSize - 1) {
        setGameState('dead')
      } else nextRow++
      break
    case 'left':
      if (headCol === 0) {
        setGameState('dead')
      } else nextCol--
      break
    case 'right':
      if (headCol === gridSize - 1) {
        setGameState('dead')
      } else nextCol++
      break
    default:
      return null
  }
  return `${nextRow}${nextCol}`
}