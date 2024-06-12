import type MediaContent from '@/models/MediaContent'
import { API } from '..'

export async function editMovie(movie: MediaContent) {
  const result = { data: null, error: null }
  const formData = {
    title: movie.title,
    description: movie.description,
    releaseDate: movie.releaseDate.toISOString(),
    resourceLink: null,
    cost: 0,
    previewImageURL: movie.previewImageURL ?? null
  }
  console.log(formData)
  const params = {
    id: movie.id,
    genresIds: movie.genres.map((genre: any) => genre.id).join(','),
    actorsIds: movie.actors?.map((actor: any) => actor.id).join(','),
    directorId: movie.director?.id
  }
  await API.put(`/film/${movie.id}`, formData, {
    params: params
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
