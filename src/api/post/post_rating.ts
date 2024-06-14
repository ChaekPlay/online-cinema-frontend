import type { UUID } from 'crypto'
import { API } from '..'

export async function postRating(mediaId: UUID, type: string, rating: any) {
  const result = { data: null, error: null }
  await API.post(
    '/rating',
    {
      comment: rating.comment,
      rating: rating.rating
    },
    {
      params: {
        userId: '',
        filmId: type === 'film' ? mediaId : null,
        seriesId: type === 'series' ? mediaId : null
      }
    }
  )
    .then((response) => {
      result.data = response.data
    })
    .catch((error) => {
      console.log(error)
      result.error = error
    })
  return result
}
