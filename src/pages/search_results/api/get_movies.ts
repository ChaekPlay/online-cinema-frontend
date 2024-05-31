import { API } from '@/api'
import SearchResult from '@/models/SearchResult'

// get movies by search query
export async function getMovies(query: string, pageSize: number, pageNumber: number) {
  const result = { data: null, error: null, totalCount: null }
  await API.get(`film`, {
    params: {
      pageSize: pageSize,
      pageNumber: pageNumber,
      title: query,
      genres: '',
      actors: '',
      director: ''
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
  return movies.data.map((movie: any) => {
    return new SearchResult({
      id: movie.id,
      title: movie.title,
      releaseDate: new Date(movie.release_date),
      genres: movie.genres,
      posterURI: movie.poster ?? null,
      shortDescription: movie.description,
      rating: movie.ratings[0]
    })
  })
}
