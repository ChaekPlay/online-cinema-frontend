import type { UUID } from 'crypto'

export default class Genre {
  id!: UUID
  name!: string
  constructor({ id, name }: Genre) {
    this.id = id
    this.name = name
  }
}
