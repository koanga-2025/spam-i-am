import ErrorPage from './ErrorPage'
import { Link } from 'react-router-dom'
import { useSpams } from '../hooks/useSpams'
import RatingAvg from '../components/RateSpam/RatingAvg'

function RateSpam() {
  const { data, isError } = useSpams()

  if (isError) return <ErrorPage />

  if (data)
    return (
      <>
        <div className="flex flex-col items-center justify-center p-8">
          <h1 className="pb-4 font-body text-body-lg font-body-bold">
            The SPAM family
          </h1>
          <div className="grid grid-cols-3 gap-8 p-6">
            {data.map((spam) => (
              <section key={spam.id} className="p-8">
                <Link to={`/rate-spam/${spam.id}/`}>
                  <img
                    src={`/images/hero_images/${spam.image}`}
                    alt={spam.name}
                    className="w-48"
                  />
                </Link>
                <RatingAvg spamId={spam.id} />
              </section>
            ))}
          </div>
        </div>
      </>
    )
}

export default RateSpam
