import type { UUID } from 'crypto'
import type MovieRole from './MovieRole'

export default class Actor {
  id!: UUID
  name!: string
  birthdate!: Date
  information!: string
  films?: MovieRole[]
  imageURL?: string

  constructor({ id, name, birthdate, information, films, imageURL }: Actor) {
    this.id = id
    this.name = name
    this.birthdate = birthdate
    this.information = information
    this.films = films ?? []
    this.imageURL = imageURL
  }
}
