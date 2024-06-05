import { API } from '@/api'
import Actor from '@/models/Actor'
import MediaContent from '@/models/MediaContent'
import type { UUID } from 'crypto'

export default async function getMovieInfo(id: UUID) {
  const result = { data: null, error: null }
  await API.get(`/film/${id}`)
    .then((response) => {
      result.data = response.data
    })
    .catch((error) => {
      console.log(error)
      result.error = error
    })
  return result
}

export async function getSeriesInfo(id: UUID) {
  const result = { data: null, error: null }
  await API.get(`/series/${id}`)
    .then((response) => {
      result.data = response.data
    })
    .catch((error) => {
      console.log(error)
      result.error = error
    })
  return result
}

export function convertInfo(movie: any) {
  const result = new MediaContent({
    id: movie.id,
    title: movie.title,
    year: new Date(movie.release_date).getFullYear(),
    genres: movie.genres,
    posterURI: movie.poster ?? 'https://placehold.it/500x850',
    description: movie.description,
    rating: movie.ratings[0],
    actors: movie.actors.map((actor: any) => {
      return new Actor({
        id: actor.id,
        name: actor.name,
        birthdate: new Date(actor.birthdate),
        information: actor.information
      })
    }),
    director: movie.director,
    seasons: movie.seasons.length
  })
  console.log(result.id)
  return result
}
