export default class MovieInfo {
  title!: string
  description!: string
  posterURI?: string
  actors!: string[]
  director!: string
  rating!: number
  year!: number
  constructor({ title, description, actors, posterURI, director, rating, year }: MovieInfo) {
    this.title = title
    this.description = description
    this.posterURI = posterURI
    this.actors = actors
    this.director = director
    this.rating = rating
    this.year = year
  }
}
