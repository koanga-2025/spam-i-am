import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllCommentsBySpamId, addComment, deleteComment } from '../apis/comments'
import { AddComment, CommentData } from '../../models/spam'

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
    onSuccess: (newComment, variables) => {
      queryClient.setQueryData(
        ['comments', variables.spamId],
        (oldData: CommentData[] | undefined) => {
          return oldData ? [...oldData, newComment] : [newComment]
        },
      )
    },
  })
}

export function useDeleteComment() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ commentId, token }: { commentId: number, token: string }) =>
      deleteComment(commentId, token),
    onSuccess: (deletedSpamId) => {
      queryClient.invalidateQueries({ queryKey: ['comments', deletedSpamId] })
    },
  })
}
