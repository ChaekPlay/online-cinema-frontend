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
    releaseDate: new Date(movie.releaseDate),
    genres: movie.genres,
    previewImageURL: movie.previewImageURL ?? 'https://placehold.it/500x850',
    description: movie.description,
    rating: movie.averageRating ?? 0,
    actors: movie.actors.map((actor: any) => {
      return new Actor({
        id: actor.id,
        name: actor.name,
        birthdate: new Date(actor.birthdate),
        information: actor.information,
        actorImageURL: actor.actorImageURL
      })
    }),
    director: movie.director,
    seasons: movie.seasons ?? null
  })
  return result
}
