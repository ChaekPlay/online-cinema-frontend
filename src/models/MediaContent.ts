import type { UUID } from 'crypto'
import type Genre from './Genre'
import type Actor from './Actor'
import type Director from './Director'
import type Season from './Season'

export default class MediaContent {
  id!: UUID
  title!: string
  description!: string
  posterURI?: string
  genres!: Genre[]
  actors!: Actor[]
  director!: Director
  rating!: number
  releaseDate!: Date
  seasons?: Season[]
  constructor({
    id,
    title,
    description,
    actors,
    genres,
    posterURI,
    director,
    rating,
    releaseDate,
    seasons
  }: MediaContent) {
    this.id = id
    this.title = title
    this.description = description
    this.posterURI = posterURI
    this.actors = actors
    this.genres = genres
    this.director = director
    this.rating = rating
    this.releaseDate = releaseDate
    this.seasons = seasons
  }
}
