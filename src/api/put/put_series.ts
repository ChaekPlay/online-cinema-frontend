import { API } from '..'

export async function putSeries(series: any) {
  const result = { data: null, error: null }
  await API.put(`/series/${series.id}`, {
    title: series.title,
    description: series.description,
    releaseDate: series.releaseDate,
    previewImageURL: series.previewImageURL,
    cost: 0
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
