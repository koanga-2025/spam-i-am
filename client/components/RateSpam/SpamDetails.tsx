import { useQuery } from '@tanstack/react-query'
import { getSpamById } from '../../apis/spams'
import { useParams } from 'react-router-dom'
import ErrorPage from '../../Pages/ErrorPage'
import RatingAvg from './RatingAvg'
import ListComments from './ListComments'
import AddComment from './AddComment'

function SpamDetails() {
  const { id } = useParams()

  const { data, isError } = useQuery({
    queryKey: ['spam'],
    queryFn: () => getSpamById(Number(id)),
  })

  if (isError) return <ErrorPage />

  if (data)
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <section className="p-8" key={data.id}>
          <img
            src={`/images/hero_images/${data.image}`}
            alt={data.name}
            className="w-48"
          />
          <div className="font-body text-body-md">
            <h2 className="font-body-bold">{data.name}</h2>
            <p>
              <strong>Description:</strong> {data.description}
            </p>
            <p>
              <strong>Flavour profile:</strong> {data.flavour_profile}
            </p>
          </div>
          <RatingAvg spamId={data.id} />
          <ListComments />
          <AddComment />
        </section>
      </div>
    )
}

export default SpamDetails
