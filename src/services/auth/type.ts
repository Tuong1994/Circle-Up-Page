import type { ERole } from '../user/enum'

export type AuthPayload = {
  id: string
  email: string
  firstName: string
  lastName: string
  fullName: string
  role: ERole
}

export type Auth = {
  accessToken: string
  expired: number
  payload: AuthPayload
  isAuth: boolean
}

export type AuthLogin = {
  email: string
  password: string
}

export type AuthRegister = {
  email: string
  password: string
  firstName: string
  lastName: string
}

export type AuthChangePassword = {
  oldPassword: string
  newPassword: string
}

export type AuthForgotPassword = {
  email: string
}

export type AuthResetPassword = {
  resetPassword: string
  confirmPassword?: string
  token: string
}
