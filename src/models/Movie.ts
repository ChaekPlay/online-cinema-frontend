export default class MovieInfo {
  title!: string
  description!: string
  posterURI?: string
  actors!: string[]
  filmedBy!: string
  rating!: number
  constructor({ title, description, actors, posterURI, filmedBy, rating }: MovieInfo) {
    this.title = title
    this.description = description
    this.posterURI = posterURI
    this.actors = actors
    this.filmedBy = filmedBy
    this.rating = rating
  }
}
