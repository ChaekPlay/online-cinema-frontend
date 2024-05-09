export default class SearchResult {
    title!: string
    year!: number
    genre!: string
    posterURI!: string
    shortDescription!: string
    rating!: number

    constructor ({title, year, genre, posterURI, shortDescription, rating}: {title: string, year: number, genre: string, posterURI: string, shortDescription: string, rating: number}) {
        this.title = title
        this.year = year
        this.genre = genre
        this.posterURI = posterURI
        this.shortDescription = shortDescription
        this.rating = rating
    }
}