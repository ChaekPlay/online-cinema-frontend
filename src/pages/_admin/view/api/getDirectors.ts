import { API } from '@/api'
import Director from '@/models/Director'

export async function getDirectors(pageSize: number, pageNumber: number) {
  const result = { data: null, error: null }
  await API.get(`/director`, {
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
