import { User } from './users.types'

export type AuthResponse = {
    access_token : string
    user: User
}