import type Episode from './Episode'

export default class Season {
  id!: number
  title!: string
  description!: string
  releaseYear!: number
  episodes!: Episode[]
  constructor({ id, title, description, releaseYear, episodes }: Season) {
    this.id = id
    this.title = title
    this.description = description
    this.releaseYear = releaseYear
    this.episodes = episodes
  }
}
