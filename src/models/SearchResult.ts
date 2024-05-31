import type { UUID } from 'crypto'

export default class SearchResult {
  id!: UUID
  title!: string
  releaseDate!: Date
  genres!: string[]
  posterURI!: string
  shortDescription!: string
  rating!: number

  constructor({
    id,
    title,
    releaseDate,
    genres,
    posterURI,
    shortDescription,
    rating
  }: SearchResult) {
    this.id = id
    this.title = title
    this.releaseDate = releaseDate
    this.genres = genres
    this.posterURI = posterURI
    this.shortDescription = shortDescription
    this.rating = rating
  }
}
