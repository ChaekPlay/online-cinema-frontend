import type { UUID } from 'crypto'
import { API } from '..'

export async function putRating(mediaId: UUID, type: string, rating: any) {
  const result = { data: null, error: null }
  await API.put(
    `/rating/${rating.id}`,
    {
      comment: rating.comment,
      rating: rating.rating
    },
    {
      params: {
        id: rating.id,
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
      result.error = error
    })
}
