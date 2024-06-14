import type { UUID } from 'crypto'
import { API } from '..'
import Review from '@/models/Review'

export async function getRatingInfo(id: UUID) {
  const result = { data: null, error: null }
  await API.get(`/rating/${id}`)
    .then((response) => {
      result.data = response.data
    })
    .catch((error) => {
      console.log(error)
      result.error = error
    })
  return result
}

export function convertRatingInfo(rating: any) {
  return new Review({
    id: rating.id,
    comment: rating.comment,
    rating: rating.rating,
    type: Review.prototype.type
  })
}
