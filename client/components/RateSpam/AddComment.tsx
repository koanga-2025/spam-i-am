import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useAddComment } from '../../hooks/useComments'

export default function AddComment() {
  const [comment, setComment] = useState('')
  const { id } = useParams()
  const spamId = Number(id)
  const addCommentMutation = useAddComment()
  const { getAccessTokenSilently } = useAuth0()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setComment(event.target.value)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!comment.trim()) return
    if (!spamId) return

    const token = await getAccessTokenSilently()
    addCommentMutation.mutate(
      { comment, spamId, token },
      {
        onSuccess: () => {
          setComment('')
        },
      },
    )
  }
  return (
    <div className="my-4">
      <h3 className="text-lg font-bold mb-2">Add a Comment</h3>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          className="flex-grow p-2 border rounded-l-md"
          placeholder="Share your thoughts..."
          aria-label="Add a comment"
          id="add-comment"
          value={comment}
          onChange={handleChange}
          disabled={addCommentMutation.isPending}
        />
        <button
          type="submit"
          disabled={addCommentMutation.isPending}
          className="bg-spamBlue text-white px-4 py-2 rounded-r-md hover:bg-spamBlue-dark disabled:bg-gray-400"
        >
          {addCommentMutation.isPending ? 'Adding...' : 'Add'}
        </button>
      </form>
      {addCommentMutation.isError && (
        <p className="text-red-500 mt-2">Error: Could not add comment.</p>
      )}
    </div>
  )
}
