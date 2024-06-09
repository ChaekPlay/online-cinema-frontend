import { API } from '@/api'
import Movie from '@/models/MediaContent'

// get movies by search query
export async function getMovies(
  query: string,
  pageSize: number,
  pageNumber: number,
  filters?: any
) {
  const result = { data: null, error: null, totalCount: null }
  console.log(filters)
  await API.get(`film`, {
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

export function convertMovies(movies: any) {
  console.log(movies)
  return movies.data.map((movie: any) => {
    return new Movie({
      id: movie.id,
      title: movie.title,
      year: new Date(movie.releaseDate).getFullYear(),
      genres: movie.genres,
      posterURI: movie.poster ?? null,
      description: movie.description,
      rating: movie.averageRating
    })
  })
}
