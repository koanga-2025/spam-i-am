import { getAllAboutText, getAllAboutImages } from '../apis/about'
import { useQuery } from '@tanstack/react-query'

export function useAboutText() {
  return useQuery({
    queryKey: ['aboutText'],
    queryFn: getAllAboutText,
  })
}
export function useAboutImages() {
  return useQuery({
    queryKey: ['aboutImages'],
    queryFn: getAllAboutImages,
  })
}
