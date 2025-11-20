import Button from '../UI/Button'

interface SnakeSettingsProps {
  speedLevel: number
  obstaclesLevel: number
  onSpeedChange: (level: number) => void
  onObstaclesChange: (level: number) => void
  onPlay: () => void
}

export default function SnakeSettings({
  speedLevel,
  obstaclesLevel,
  onSpeedChange,
  onObstaclesChange,
  onPlay,
}: SnakeSettingsProps) {
  const difficultyLabels = ['Easy', 'Medium', 'Hard']

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="w-full max-w-md">
        <label htmlFor="speed-slider" className="block mb-2 font-semibold">
          Speed: {difficultyLabels[speedLevel]}
        </label>
        <input
          id="speed-slider"
          type="range"
          min="0"
          max="2"
          step="1"
          value={speedLevel}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          aria-label="Speed difficulty slider"
        />
        <div className="flex justify-between text-sm mt-1">
          <span>Easy</span>
          <span>Medium</span>
          <span>Hard</span>
        </div>
      </div>

      <hr className="w-full max-w-md" />

      <div className="w-full max-w-md">
        <label htmlFor="obstacles-slider" className="block mb-2 font-semibold">
          Number of Obstacles: {difficultyLabels[obstaclesLevel]}
        </label>
        <input
          id="obstacles-slider"
          type="range"
          min="0"
          max="2"
          step="1"
          value={obstaclesLevel}
          onChange={(e) => onObstaclesChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          aria-label="Obstacles difficulty slider"
        />
        <div className="flex justify-between text-sm mt-1">
          <span>Easy (0)</span>
          <span>Medium (3)</span>
          <span>Hard (5)</span>
        </div>
      </div>

      <hr className="w-full max-w-md" />

      <ul className="list-disc list-inside text-left">
        <li>Use Arrow keys to move</li>
        <li>Eat spam to grow and increase your score </li>
        <li>Avoid tofu as it will kill you (allergies)</li>
      </ul>

      <Button onClick={onPlay}>Play</Button>
    </div>
  )
}
