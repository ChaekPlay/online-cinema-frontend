import type { UUID } from 'crypto'
import type MovieRole from './MovieRole'

export default class Actor {
  id!: UUID
  name!: string
  birthdate!: Date
  information!: string
  films?: MovieRole[]

  constructor({ id, name, birthdate, information, films }: Actor) {
    this.id = id
    this.name = name
    this.birthdate = birthdate
    this.information = information
    this.films = films ?? []
  }
}
