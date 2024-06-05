export default class Episode {
  id!: number
  title!: string
  description!: string
  releaseDate!: Date
  constructor({ id, title, description, releaseDate }: Episode) {
    this.id = id
    this.title = title
    this.description = description
    this.releaseDate = releaseDate
  }
}
