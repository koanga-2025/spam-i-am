import { useState, useEffect } from 'react'

const useCountdownTimer = (initialDuration: number) => {
  const [timer, setTimer] = useState(initialDuration)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(intervalId) // Clear the interval when the timer reaches 0
          return 0 // Set timer to 0
        }
        return prevTimer - 1
      })
    }, 1000) // Update the timer every second

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId)
    }
  }, [initialDuration])

  return timer
}

export default useCountdownTimer
