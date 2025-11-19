import { getAllAboutText, getAllAboutImages } from '../apis/about'
import { useQuery } from '@tanstack/react-query'

export function useAboutText() {
  const query = useQuery({
    queryKey: ['aboutText'],
    queryFn: getAllAboutText,
  })
  return {
    ...query,
  }
}
export function useAboutImages() {
  const query = useQuery({
    queryKey: ['aboutImages'],
    queryFn: getAllAboutImages,
  })
  return {
    ...query,
  }
}
