import { API } from '@/api'
import Series from '@/models/MediaContent'

export async function getSeries(
  query: string,
  pageSize: number,
  pageNumber: number,
  filters?: any
) {
  const result = { data: null, error: null, totalCount: null }
  console.log('filters: ' + filters)
  await API.get(`series`, {
    params: {
      pageSize: pageSize,
      pageNumber: pageNumber,
      title: query,
      genres: filters?.genres.join(',') ?? '',
      actors: filters?.actors.join(',') ?? '',
      director: filters?.director ?? ''
    }
  })
    .then((response: any) => {
      result.data = response.data
      result.totalCount = response.data.totalCount
    })
    .catch((error: any) => {
      console.log(error)
      result.error = error
    })
  return result
}

export function convertSeries(series: any) {
  console.log(series)
  return series.data.map((movie: any) => {
    return new Series({
      id: movie.id,
      title: movie.title,
      releaseDate: new Date(movie.releaseDate),
      genres: movie.genres,
      previewImageURL: movie.poster ?? null,
      description: movie.description,
      rating: movie.averageRating,
      seasons: movie.seasons.length
    })
  })
}
