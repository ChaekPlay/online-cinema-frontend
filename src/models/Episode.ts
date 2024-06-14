export default class Episode {
  id!: number
  title!: string
  description!: string
  releaseDate!: Date
  resourceLink?: string
  constructor({ id, title, description, releaseDate, resourceLink }: Episode) {
    this.id = id
    this.title = title
    this.description = description
    this.releaseDate = releaseDate
    this.resourceLink = resourceLink
  }
}
