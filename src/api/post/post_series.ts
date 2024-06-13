import { API } from '..'

export async function postSeries(series: any) {
  const result = { data: null, error: null }
  await API.post(
    '/series',
    {
      title: series.title,
      description: series.description,
      releaseDate: series.releaseDate,
      previewImageURL: series.previewImageURL,
      cost: 0
    },
    {
      params: {
        filmsIds: '',
        seriesIds: ''
      }
    }
  )
    .then((response) => {
      result.data = response.data
    })
    .catch((error) => {
      console.log(error)
      result.error = error
    })
  return result
}
