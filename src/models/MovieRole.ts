export default class MovieRole {
    id!: number
    title!: string
    role!: string
    constructor({ id, title, role }: MovieRole) {
        this.id = id
        this.title = title
        this.role = role
    }
}