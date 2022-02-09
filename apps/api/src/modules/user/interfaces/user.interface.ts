import { UserRole } from '../../../../../../libs/UserRole'

export interface IUser {
  id: number
  name?: string
  email: string
  password: string
  role: UserRole
  emailConfirmed: boolean
  activated: boolean
  blocked: boolean
  createdAt: Date
  updatedAt: Date

  setPassword: (password: string) => Promise<void>
  comparePassword: (password: string) => Promise<boolean>
}