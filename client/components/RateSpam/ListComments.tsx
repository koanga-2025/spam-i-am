import { useComments } from '../../hooks/useComments'
import { formatDate } from '../../utils/formatTimer'
import ErrorPage from '../../Pages/ErrorPage'

interface Props {
  spamId: number
}

function ListComments({ spamId }: Props) {
  const { data: comments, isLoading, isError } = useComments(spamId)

  if (isLoading) {
    return <p>Loading comments...</p>
  }

  if (isError) return <ErrorPage />

  return (
    <>
      <h4>Comments</h4>
      <ul>
        {comments?.map((comment) => (
          <li key={comment.id}>
            {comment.comment_text}
            <br />
            Created on: {formatDate(comment.created_date)}
          </li>
        ))}
        <br></br>
      </ul>
    </>
  )
}

export default ListComments
