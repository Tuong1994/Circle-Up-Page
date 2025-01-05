import type { ApiConfig, ApiResponse, ResponseError } from './type'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import Axios, { HttpStatus } from './axios'

const Method = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

export const defaultApiResponse = <T>(): ApiResponse<T> => ({ data: {} as T, success: false })

export const ApiResponseError = (status: number, message: string): ResponseError => {
  return {
    status: status ? status : 0,
    message: message ? message : ''
  }
}

const call = async <T = unknown, D = any>(apiConfig: ApiConfig<T>) => {
  const { method, apiPath, body, config } = apiConfig
  const initConfig: AxiosRequestConfig<T> = {
    method,
    url: apiPath,
    timeout: 3000,
    ...config
  }
  if (method !== Method.GET && body !== undefined) initConfig.data = body
  let apiResponse: ApiResponse<D> = defaultApiResponse<D>()
  try {
    const response = (await Axios<T, D>(initConfig)) as AxiosResponse<any, D>
    if (response.status === HttpStatus.NOT_FOUND)
      apiResponse = {
        ...apiResponse,
        success: false,
        error: ApiResponseError(response.status, response.statusText)
      }
    else apiResponse = { ...apiResponse, success: true, data: response.data }
  } catch (error: any) {
    if (!error.response) {
      if (error.code === 'ECONNABORTED') {
        return (apiResponse = {
          ...apiResponse,
          success: false,
          error: ApiResponseError(504, 'Request timeout')
        })
      }
      apiResponse = {
        ...apiResponse,
        success: false,
        error: ApiResponseError(500, 'Api network failed')
      }
    } else {
      const status = error.response.data.statusCode
      const message = error.response?.data.message
      apiResponse = { ...apiResponse, success: false, error: ApiResponseError(status, message) }
    }
  }
  return apiResponse
}

const Get = <D>(apiPath: string, config?: AxiosRequestConfig) => {
  return call<any, D>({ method: Method.GET, apiPath, config })
}
const Post = <T, D = any>(apiPath: string, body: T, config?: AxiosRequestConfig<T>) => {
  return call<T, D>({ method: Method.POST, apiPath, body, config })
}
const Put = <T, D = any>(apiPath: string, body: T, config?: AxiosRequestConfig<T>) => {
  return call<T, D>({ method: Method.PUT, apiPath, body, config })
}
const Delete = <D>(apiPath: string, config?: AxiosRequestConfig) => {
  return call<any, D>({ method: Method.DELETE, apiPath, config })
}

const Fetch = { Get, Post, Put, Delete }

export default Fetch
