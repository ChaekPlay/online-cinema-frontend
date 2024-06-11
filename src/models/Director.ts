import type { UUID } from 'crypto'

export default class Director {
  id!: UUID
  name!: string
  birthdate!: Date
  information!: string
  imageURL?: string

  constructor({ id, name, birthdate, information, imageURL }: Director) {
    this.id = id
    this.name = name
    this.birthdate = birthdate
    this.information = information
    this.imageURL = imageURL
  }
}
