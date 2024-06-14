import type { UUID } from 'crypto'
import type Episode from './Episode'

export default class Season {
  id!: UUID
  title!: string
  description!: string
  releaseDate!: Date
  previewImageURL!: string
  episodes?: Episode[]
}
