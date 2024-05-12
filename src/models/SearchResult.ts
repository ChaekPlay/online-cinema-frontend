export default class SearchResult {
  id!: number
  title!: string
  year!: number
  genre!: string
  posterURI!: string
  shortDescription!: string
  rating!: number

  constructor({ id, title, year, genre, posterURI, shortDescription, rating }: SearchResult) {
    this.id = id
    this.title = title
    this.year = year
    this.genre = genre
    this.posterURI = posterURI
    this.shortDescription = shortDescription
    this.rating = rating
  }
}
