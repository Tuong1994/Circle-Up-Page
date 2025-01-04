import type { Auth, AuthInfo, AuthSignIn, AuthSignUp } from './type'
import localStorageKey from '@/common/constant/localStorage'
import authApiPaths from './path'
import Fetch from '..'

export const signIn = async (data: AuthSignIn) => {
  const response = await Fetch.Post<AuthSignIn, Auth>(authApiPaths.signIn, data)
  if (response.success) localStorage.setItem(localStorageKey.AUTH, JSON.stringify(response.data))
  return response
}

export const signUp = async (data: AuthSignUp) => {
  const response = await Fetch.Post<AuthSignUp, AuthInfo>(authApiPaths.signUp, data)
  return response
}
