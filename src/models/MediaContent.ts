import type { UUID } from 'crypto'
import type Genre from './Genre'
import type Actor from './Actor'
import type Director from './Director'
import type Season from './Season'

export default class MediaContent {
  id!: UUID
  title!: string
  description!: string
  previewImageURL?: string
  genres!: Genre[]
  actors!: Actor[]
  director!: Director
  rating!: number
  releaseDate!: Date
  seasons?: Season[]
  resourceLink?: string
  constructor({
    id,
    title,
    description,
    actors,
    genres,
    previewImageURL,
    director,
    rating,
    releaseDate,
    seasons,
    resourceLink
  }: MediaContent) {
    this.id = id
    this.title = title
    this.description = description
    this.previewImageURL = previewImageURL
    this.actors = actors
    this.genres = genres
    this.director = director
    this.rating = rating
    this.releaseDate = releaseDate
    this.seasons = seasons
    this.resourceLink = resourceLink
  }
}
