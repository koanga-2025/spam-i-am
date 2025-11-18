import { useState } from 'react'
import InfiniteBanner from '../components/UI/InfiniteBanner'

function Home() {
  const [isReversed, setIsReversed] = useState(false)

  return (
    <>
      <section className="items-center justify-center">
        <InfiniteBanner isReversed={isReversed} />
        <InfiniteBanner isReversed={!isReversed} />
        <InfiniteBanner isReversed={isReversed} />
        <InfiniteBanner isReversed={!isReversed} />
      </section>
    </>
  )
}

export default Home
