import { API } from '..'

export async function uploadFile(file: File) {
  const result = { data: null, error: null }
  const fd = new FormData()
  fd.append('file', file)
  await API.post('/files/upload', fd, {
    headers: {
      'Content-Type': 'multipart/form-data'
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

export function getImageURL(data: any) {
    return data.url;
}
