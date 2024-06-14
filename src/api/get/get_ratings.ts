import Review from '@/models/Review'
import { API } from '..'

export async function getRatings(pageSize: number, pageNumber: number) {
  const result = { data: null, error: null, totalCount: null }
  await API.get('/rating', {
    params: {
      pageSize: pageSize,
      pageNumber: pageNumber
    }
  })
    .then((response) => {
      result.data = response.data
      result.totalCount = response.data.totalCount
    })
    .catch((error) => {
      console.log(error)
      result.error = error
    })
  return result
}

export function convertRatings(ratings: any) {
  return ratings.data.map((rating: any) => {
    return new Review({
      id: rating.id,
      comment: rating.comment,
      rating: rating.rating,
      type: Review.prototype.type
    })
  })
}
