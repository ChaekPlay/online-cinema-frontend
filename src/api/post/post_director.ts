import { API } from '..'

export async function postDirector(director: any) {
  const result = { data: null, error: null }
  await API.post(
    '/director',
    {
      name: director.name,
      birthdate: director.birthdate,
      information: director.information,
      directorImageURL: director.actorImageURL
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
