import { API } from '@/api'
import Actor from '@/models/Actor'
import type { UUID } from 'crypto'

export async function getActorInfo(id: UUID) {
  const result = { data: null, error: null }
  await API.get(`/actor/${id}`)
    .then((response) => {
      result.data = response.data
    })
    .catch((error) => {
      console.log(error)
      result.error = error
    })
  return result
}

export function convertActorInfo(actor: any) {
  return new Actor({
    id: actor.id,
    name: actor.name,
    birthdate: new Date(actor.birthdate),
    information: actor.information,
    actorImageURL: actor.actorImageURL
    //films: actor.films
  })
}
