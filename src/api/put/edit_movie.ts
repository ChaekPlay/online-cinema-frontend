import { API } from '..'

export async function editMovie(movie: any) {
  const result = { data: null, error: null }
  await API.put(`/film/${movie.id}`, movie)
    .then((response) => {
      result.data = response.data
    })
    .catch((error) => {
      console.log(error)
      result.error = error
    })
  return result
}
