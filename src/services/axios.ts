import axios, { type AxiosResponse } from 'axios'
import type { Auth } from './auth/type'
import { getApiQuery } from './helper'
import authApiPaths from './auth/path'
import localStorageKey from '@/common/constant/localStorage'

const BASE_URL ='http://localhost:8000/'

export const HttpStatus = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  GATEWAY_TIME_OUT: 504,
  INTERNAL_SERVER: 500
}

const Axios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

Axios.interceptors.request.use(
  (config) => {
    if (typeof window === 'undefined') return config
    if (localStorage.getItem(localStorageKey.AUTH)) {
      const auth = JSON.parse(localStorage.getItem(localStorageKey.AUTH) ?? '') as Auth
      if (!auth) return config
      config.headers['Authorization'] = `Bearer ${auth.accessToken}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

Axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (typeof window === 'undefined') return Promise.reject(error)
    if (error?.code === HttpStatus.GATEWAY_TIME_OUT) return Promise.reject(error)
    const config = error?.config
    const response = error?.response
    if (localStorage.getItem(localStorageKey.AUTH)) {
      const auth = JSON.parse(localStorage.getItem(localStorageKey.AUTH) ?? '') as Auth
      if (!auth) return Promise.reject(error)
      if (
        response?.status === HttpStatus.UNAUTHORIZED ||
        response?.status === HttpStatus.FORBIDDEN ||
        !config?._retry
      ) {
        config._retry = true
        try {
          const response = await axios.post(
            BASE_URL + authApiPaths.refresh + getApiQuery({ userId: auth.info.id })
          )
          const data = response.data as Auth
          const newAuth: Auth = { ...auth, accessToken: data.accessToken, expired: data.expired }
          localStorage.setItem(localStorageKey.AUTH, JSON.stringify(newAuth))
          config.headers['Authorization'] = `Bearer ${data.accessToken}`
          return axios(config) as Promise<AxiosResponse>
        } catch (error) {
          return Promise.reject(error)
        }
      }
    }
    return Promise.reject(error)
  }
)

export default Axios
