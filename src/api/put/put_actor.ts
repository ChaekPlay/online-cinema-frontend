import { API } from '..'

export async function putActor(actor: any) {
  const result = { data: null, error: null }
  await API.put(`/actor/${actor.id}`, {
    name: actor.name,
    birthdate: actor.birthdate,
    information: actor.information,
    actorImageURL: actor.actorImageURL
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
