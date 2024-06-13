import { API } from '..'

export async function putDirector(director: any) {
  const result = { data: null, error: null }
  await API.put(`/director/${director.id}`, {
    name: director.name,
    birthdate: director.birthdate,
    information: director.information,
    directorImageURL: director.directorImageURL
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
