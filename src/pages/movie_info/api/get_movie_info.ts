import client from '@/api'

export default async function getMovieInfo(id: number) {
  const data = await client.get('/movie/' + id)
  return data
}
