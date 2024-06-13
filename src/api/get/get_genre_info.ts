import type { UUID } from 'crypto'
import { API } from '..'
import Genre from '@/models/Genre'

export async function getGenreInfo(id: UUID) {
  const result = { data: null, error: null }
  await API.get(`/genre/${id}`)
    .then((response) => {
      result.data = response.data
    })
    .catch((error) => {
      console.log(error)
      result.error = error
    })
  return result
}

export function convertGenreInfo(genre: any) {
  return new Genre({
    id: genre.id,
    name: genre.name
  })
}
