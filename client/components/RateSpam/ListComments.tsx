import { useComments, useDeleteComment } from '../../hooks/useComments'
import { formatDateTime } from '../../utils/formatTimer'
import ErrorPage from '../../Pages/ErrorPage'
import { useAuth0 } from '@auth0/auth0-react'

interface Props {
  spamId: number
}

function ListComments({ spamId }: Props) {
  const { data: comments, isLoading, isError } = useComments(spamId)
  const { user, getAccessTokenSilently } = useAuth0()
  const deleteCommentMutation = useDeleteComment()

  if (isLoading) {
    return <p>Loading comments...</p>
  }

  if (isError) return <ErrorPage />

  const handleDelete = async (commentId: number) => {
    const token = await getAccessTokenSilently()
    deleteCommentMutation.mutate({ commentId, token })
  }

  return (
    <>
      <h4>Comments</h4>
      <ul>
        {comments?.map((comment) => (
          <li key={comment.id}>
            {comment.comment_text}
            Created on: {formatDateTime(comment.created_date)}
            {user?.sub === comment.user_id && (
              <button onClick={() => handleDelete(comment.id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListComments
