import type { ERole } from '../user/enum'

export type AuthInfo = {
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
  info: AuthInfo
  isAuth: boolean
}

export type AuthSignIn = {
  email: string
  password: string
}

export type AuthSignUp = {
  email: string
  password: string
  phone: string
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
