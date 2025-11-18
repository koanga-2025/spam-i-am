import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getAllSpams } from '../apis/spams'

export function useSpams() {
  const query = useQuery({ queryKey: ['spams'], queryFn: getAllSpams })
  return {
    ...query,
  }
}

export function useSpamsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['spams'] })
    },
  })

  return mutation
}
