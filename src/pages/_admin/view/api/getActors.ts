import { API } from '@/api'
import Actor from '@/models/Actor'

export function getActors( query: string, pageSize: number, pageNumber: number) {
    
  const result = { data: null, error: null, totalCount: null }
  API.get(`/actor`, {
    params: {
      pageSize: pageSize,
      pageNumber: pageNumber,
      name: query
    }
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

export function convertActors(actors: any) {
  return actors.data.map((actor: any) => {
    return new Actor({
      id: actor.id,
      name: actor.name,
      birthdate: new Date(actor.birthdate),
      information: actor.information
    })
  })
}
