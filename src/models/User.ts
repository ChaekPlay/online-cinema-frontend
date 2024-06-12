import type { UUID } from 'crypto'
import type { UserRole } from './UserRole'

export default class User {
  id?: UUID
  name!: string
  email!: string
  phoneNumber!: string
  password!: string
  userRole?: UserRole
  profileImageURL?: string

  constructor({ id, name, email, phoneNumber, password, userRole, profileImageURL }: User) {
    this.id = id
    this.name = name
    this.email = email
    this.phoneNumber = phoneNumber
    this.password = password
    this.userRole = userRole
    this.profileImageURL = profileImageURL
  }
}
