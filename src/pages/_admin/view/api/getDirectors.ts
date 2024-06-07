import { API } from '@/api'
import Director from '@/models/Director'

export function getDirectors(query: string, pageSize: number, pageNumber: number) {
  const result = { data: null, error: null }
  API.get(`/director`, {
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

export function convertDirectors(directors: any) {
  return directors.data.map((director: any) => {
    return new Director({
      id: director.id,
      name: director.name,
      birthdate: new Date(director.birthdate),
      information: director.information
    })
  })
}
