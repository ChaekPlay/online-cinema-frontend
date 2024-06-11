import { API } from '..'

export async function createMovie(movie: any) {
  console.log(movie)
  const result = { data: null, error: null }
  await API.post(
    `/film`,
    {
      title: movie.title,
      description: movie.description,
      releaseDate: movie.releaseDate,
      resourceLink: '',
      cost: 0
    },
    {
      params: {
        genresIds: movie.genres.map((genre: any) => genre.id).join(','),
        actorsIds: movie.actors.map((actor: any) => actor.id).join(','),
        directorId: movie.director.id
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
