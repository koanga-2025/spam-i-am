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
    if (!spamId) return
    if (!comment.trim()) return

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
    <>
      <div>Add Comment</div>
      <form onSubmit={handleSubmit}>
        <input
          className="rounded border border-spamBlue"
          aria-label="Add a comment"
          id="add-comment"
          value={comment}
          onChange={handleChange}
          disabled={addCommentMutation.isPending}
        />
        <button type="submit" disabled={addCommentMutation.isPending}>
          {addCommentMutation.isPending ? 'Adding...' : 'Add'}
        </button>
      </form>
      {addCommentMutation.isError && (
        <p style={{ color: 'red' }}>Error: Could not add comment.</p>
      )}
    </>
  )
}
