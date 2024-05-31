import type { UUID } from 'crypto'
import type Genre from './Genre'
import type Actor from './Actor'
import type Director from './Director'

export default class MovieInfo {
  id!: UUID
  title!: string
  description!: string
  posterURI?: string
  genres!: Genre[]
  actors!: Actor[]
  director!: Director
  rating!: number
  year!: number
  constructor({
    id,
    title,
    description,
    actors,
    genres,
    posterURI,
    director,
    rating,
    year
  }: MovieInfo) {
    this.id = id
    this.title = title
    this.description = description
    this.posterURI = posterURI
    this.actors = actors
    this.genres = genres
    this.director = director
    this.rating = rating
    this.year = year
  }
}
