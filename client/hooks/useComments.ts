import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllCommentsBySpamId, addComment } from '../apis/comments'
import { AddComment } from '../../models/spam'

export function useComments(spamId: number) {
  return useQuery({
    queryKey: ['comments', spamId],
    queryFn: () => getAllCommentsBySpamId(spamId),
  })
}

export function useAddComment() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (comment: AddComment) => addComment(comment),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['comments', variables.spamId] })
    },
  })
}
