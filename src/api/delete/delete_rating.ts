import type { UUID } from 'crypto'
import { API } from '..'

export async function deleteRating(id: UUID) {
  if (!id) return
  const result = { data: null, error: null }
  await API.delete(`/rating/${id}`)
    .then((response) => {
      result.data = response.data
    })
    .catch((error) => {
      console.log(error)
      result.error = error
    })
  return result
}
