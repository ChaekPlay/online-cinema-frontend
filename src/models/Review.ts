import type { ReviewType } from "./ReviewType"

export default class Review {
    id!: number
    title!: string
    text!: string
    type!: ReviewType
    constructor({ id, title, text, type}: Review) {
        this.id = id
        this.title = title
        this.text = text
        this.type = type
    }
}