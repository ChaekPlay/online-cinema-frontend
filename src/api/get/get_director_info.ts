import { API } from '@/api'
import Director from '@/models/Director'
import type { UUID } from 'crypto'

export async function getDirectorInfo(id: UUID) {
  const result = { data: null, error: null }
  await API.get(`/director/${id}`)
    .then((response) => {
      result.data = response.data
    })
    .catch((error) => {
      console.log(error)
      result.error = error
    })
  return result
}

export function convertDirectorInfo(director: any) {
  return new Director({
    id: director.id,
    name: director.name,
    birthdate: new Date(director.birthdate),
    information: director.information,
    directorImageURL: director.actorImageURL
    //films: actor.films
  })
}
