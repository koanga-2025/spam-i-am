// COMMENTS
import request from 'superagent'
import { CommentData, AddComment } from '../../models/spam'
import { logError } from './api-utils'

const rootUrl = '/api/v1'

export async function getAllCommentsBySpamId(spamId: number) {
  return request
    .get(`${rootUrl}/comments/${spamId}`)
    .then((res) => {
      return res.body.comments as CommentData[]
    })
    .catch(logError)
}

export async function addComment(commentObj: AddComment) {
  const { comment, spamId, token } = commentObj

  return request
    .post(`${rootUrl}/comments/`)
    .set('Authorization', `Bearer ${token}`)
    .send({ comment: comment, spamId: spamId })
    .then((res) => {
      const newComment = res.body.newComment?.[0]
      if (!newComment) {
        throw new Error('API response did not include the new comment.')
      }
      return newComment as CommentData
    })
    .catch(logError)
}

export async function deleteComment(commentId: number, token: string) {
  return request
    .delete(`${rootUrl}/comments/${commentId}`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body.spamId as number) // Expecting { spamId: number } from the backend
    .catch(logError)
}
