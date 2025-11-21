import ErrorPage from './ErrorPage'
import { Link } from 'react-router-dom'
import { useSpams } from '../hooks/useSpams'
import { useAllAvgRatings } from '../hooks/useRatings'
import RatingAvg from '../components/RateSpam/RatingAvg'

function RateSpam() {
  const { data: spamsData, isError: spamsError } = useSpams()
  const { data: ratingsData, isError: ratingsError } = useAllAvgRatings()

  if (spamsError || ratingsError) return <ErrorPage />

  if (spamsData) {
    // Create a lookup map for quick access to ratings by spam_id
    const ratingsMap = new Map(
      ratingsData?.map((r) => [r.spam_id, r.average_rating]) || [],
    )

    return (
      <>
        <div className="flex flex-col items-center justify-center p-8">
          <h1 className="pb-4 font-body text-body-lg font-body-bold">
            The SPAM family
          </h1>
          <div className="grid grid-cols-3 gap-8 p-6">
            {spamsData.map((spam) => (
              <section key={spam.id} className="p-8">
                <Link to={`/rate-spam/${spam.id}/`}>
                  <img
                    src={`/images/hero_images/${spam.image}`}
                    alt={spam.name}
                    className="w-48"
                  />
                </Link>
                <RatingAvg
                  spamId={spam.id}
                  avgRating={ratingsMap.get(spam.id)}
                />
              </section>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default RateSpam
