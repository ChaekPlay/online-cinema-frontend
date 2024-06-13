import { API } from '..'

export async function postActor(actor: any) {
  const result = { data: null, error: null }
  await API.post(
    '/actor',
    {
      name: actor.name,
      birthdate: actor.birthdate,
      information: actor.information,
      actorImageURL: actor.actorImageURL
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
