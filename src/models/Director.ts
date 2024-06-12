import type { UUID } from 'crypto'

export default class Director {
  id!: UUID
  name!: string
  birthdate!: Date
  information!: string
  directorImageURL?: string

  constructor({ id, name, birthdate, information, directorImageURL: imageURL }: Director) {
    this.id = id
    this.name = name
    this.birthdate = birthdate
    this.information = information
    this.directorImageURL = imageURL
  }
}
