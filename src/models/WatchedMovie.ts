export default class WatchedMovie {
    id!: number
    title!: string
    posterURI?: string
    year!: number
    rating?: number
    constructor({ id, title, posterURI, year, rating }: WatchedMovie) {
        this.id = id
        this.title = title
        this.posterURI = posterURI
        this.year = year
        this.rating = rating
    }
}