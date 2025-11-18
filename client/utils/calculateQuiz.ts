import { QuizAnswers } from '../../models/spam'

export default function calculateQuiz(obj: QuizAnswers) {
  // Step 1: Count occurrences
  const frequencyMap: Record<string, number> = {}
  Object.values(obj).forEach(
    (letter) => (frequencyMap[letter] = (frequencyMap[letter] || 0) + 1),
  )

  // Step 2: Find the most common letter
  const mostCommonLetter = Object.keys(frequencyMap).reduce((a, b) =>
    frequencyMap[a] > frequencyMap[b] ? a : b,
  )

  return mostCommonLetter
}
