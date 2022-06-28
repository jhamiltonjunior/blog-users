// import { AuthorData } from '../../domain/entities/articles/validators/author'
import { IUserAuthData, IUserData } from '../../domain/entities/users/interfaces/userData'

// eslint-disable-next-line camelcase
// type AuthorData = { user_id: string, name: string }

export interface IRegisterUserRepository {
  findAllUsers: () => Promise<IUserData[]>
  findUserByEmail: (email: string) => Promise<IUserData>
  add: (user: IUserData) => Promise<void>
  exists: (email: string) => Promise<boolean>
}

export interface IAuthUserRepository {
  findUserByEmail: (email: string) => Promise<IUserAuthData>
  comparePassword: (password: string, hash: string) => Promise<boolean>
  exists: (email: string) => Promise<boolean>
  authenticateUser: (id: string | undefined, token?: string) => Promise<string>
}

export interface IUserRepository {
  add: (user: IUserData) => Promise<void>
  update: (user: IUserData, tokenId: string) => Promise<void>
  generateDefaultPermission: (userId: string, permissionId: string) => Promise<void>
  findUserById: (id: string) => Promise<IUserData>
  getPermission: (id: string) => Promise<string>

  exists: (email: string) => Promise<boolean>

  // methods more used for authenticate
  findUserByEmail: (email: string) => Promise<IUserAuthData>
  comparePassword: (password: string, hash: string) => Promise<boolean>
  authenticateUser: (id: string | undefined, token?: string) => Promise<string>
}
