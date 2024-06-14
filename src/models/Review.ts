import type { UUID } from 'crypto'
import { ReviewType } from './ReviewType'

export default class Review {
  id!: UUID
  rating!: number
  comment!: string
  constructor({ id, comment, rating }: Review) {
    this.id = id
    this.comment = comment
    this.rating = rating
  }
  public get type(): ReviewType {
    if (this.rating < 3) {
      return ReviewType.NEGATIVE
    } else if (this.rating < 6) {
      return ReviewType.NEUTRAL
    } else {
      return ReviewType.POSITIVE
    }
  }
}
