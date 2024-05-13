export default class ActorSummary {
    id!: number
    name!: string
    role!: string
    photoURI?: string
    constructor({ id, name, role }: ActorSummary) {
        this.id = id
        this.name = name
        this.role = role
    }
}