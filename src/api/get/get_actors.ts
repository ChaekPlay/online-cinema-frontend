import { API } from '@/api'
import Actor from '@/models/Actor'

export async function getActors(pageSize: number, pageNumber: number) {
  const result = { data: null, error: null, totalCount: null }
  await API.get(`/actor`, {
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

export function convertActors(actors: any) {
  return actors.data.map((actor: any) => {
    return new Actor({
      id: actor.id,
      name: actor.name,
      birthdate: new Date(actor.birthdate),
      information: actor.information,
      actorImageURL: actor.actorImageURL
    })
  })
}
