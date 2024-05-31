import type { UUID } from 'crypto'

export default class Actor {
  id!: UUID
  name!: string
  birthdate!: Date
  information!: string

  constructor({ id, name, birthdate, information }: Actor) {
    this.id = id
    this.name = name
    this.birthdate = birthdate
    this.information = information
  }
}
