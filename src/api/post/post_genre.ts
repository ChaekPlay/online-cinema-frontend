import { API } from '..'

export async function postGenre(genre: any) {
  const result = { data: null, error: null }
  await API.post(
    '/genre',
    {
      name: genre.name
    },
    {
      params: {
        filmsIds: '',
        seriesIds: ''
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
