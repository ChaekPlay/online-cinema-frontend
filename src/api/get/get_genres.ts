import Genre from '@/models/Genre'
import { API } from '..'

export async function getGenres() {
  const result = { data: null, error: null }
  await API.get(`/genre`, {
    params: {
      pageSize: 1000,
      pageNumber: 0
    }
  })
    .then((response) => {
      result.data = response.data
    })
    .catch((error) => {
      console.log(error)
      result.error = error
    })
  return result
}

export function convertGenres(genres: any) {
  return genres.data.map((genre: any) => {
    return new Genre({
      id: genre.id,
      name: genre.name
    })
  })
}
