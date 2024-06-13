import { API } from '..'

export async function putGenre(genre: any) {
  const result = { data: null, error: null }
  await API.put(`/genre/${genre.id}`, {
    name: genre.name
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
