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
    <div className="my-6">
      <h4 className="text-lg font-bold mb-2">Comments</h4>
      <ul className="space-y-4">
        {comments?.map((comment) => (
          <li
            key={comment.id}
            className="border p-4 rounded-md flex justify-between items-start"
          >
            <div>
              <p className="text-gray-800">{comment.comment_text}</p>
              <p className="text-xs text-gray-500 mt-1">
                Created on: {formatDateTime(comment.created_date)}
              </p>
            </div>
            {user?.sub === comment.user_id && (
              <button
                onClick={() => handleDelete(comment.id)}
                className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                aria-label="Delete comment"
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListComments
