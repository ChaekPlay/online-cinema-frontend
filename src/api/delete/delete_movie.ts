import type { UUID } from 'crypto'
import { API } from '..'

export async function deleteMovie(id: UUID) {
  if (!id) return
  const result = { data: null, error: null }
  await API.delete(`/film/${id}`)
    .then((response) => {
      result.data = response.data
    })
    .catch((error) => {
      console.log(error)
      result.error = error
    })
  return result
}
