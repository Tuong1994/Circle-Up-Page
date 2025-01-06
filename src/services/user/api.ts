import { getApiQuery } from '../helper'
import type { ApiQuery, Paging } from '../type'
import type {
  User,
  UserEducation,
  UserEducatonRequestData,
  UserInfo,
  UserInfoRequestData,
  UserLived,
  UserLivedRequestData,
  UserRequestData,
  UserWork,
  UserWorkRequestData
} from './type'
import userApiPaths from './path'
import Fetch from '..'

export const getUsers = async (query: ApiQuery) => {
  const response = await Fetch.Get<Paging<User>>(userApiPaths.list + getApiQuery(query))
  return response
}

export const getUser = async (query: ApiQuery) => {
  const response = await Fetch.Get<User>(userApiPaths.detail + getApiQuery(query))
  return response
}

export const createUser = async (data: UserRequestData) => {
  const response = await Fetch.Post<UserRequestData, User>(userApiPaths.create, data)
  return response
}

export const createUserInfo = async (data: UserInfoRequestData) => {
  const response = await Fetch.Post<UserInfoRequestData, UserInfo>(userApiPaths.createInfo, data)
  return response
}

export const createUserWork = async (data: UserWorkRequestData) => {
  const response = await Fetch.Post<UserWorkRequestData, UserWork>(userApiPaths.createWork, data)
  return response
}

export const createUserEducation = async (data: UserEducatonRequestData) => {
  const response = await Fetch.Post<UserEducatonRequestData, UserEducation>(
    userApiPaths.createEducation,
    data
  )
  return response
}

export const createUserLived = async (data: UserLivedRequestData) => {
  const response = await Fetch.Post<UserLivedRequestData, UserLived>(userApiPaths.createLived, data)
  return response
}

export const updateUser = async (query: ApiQuery, data: UserRequestData) => {
  const response = await Fetch.Put<UserRequestData, any>(userApiPaths.update + getApiQuery(query), data)
  return response
}

export const updateUserInfo = async (query: ApiQuery, data: UserInfoRequestData) => {
  const response = await Fetch.Put<UserInfoRequestData, UserInfo>(
    userApiPaths.updateInfo + getApiQuery(query),
    data
  )
  return response
}

export const updateUserWork = async (query: ApiQuery, data: UserWorkRequestData) => {
  const response = await Fetch.Put<UserWorkRequestData, UserWork>(
    userApiPaths.updateWork + getApiQuery(query),
    data
  )
  return response
}

export const updateUserEducation = async (query: ApiQuery, data: UserEducatonRequestData) => {
  const response = await Fetch.Put<UserEducatonRequestData, UserEducation>(
    userApiPaths.updateEducation + getApiQuery(query),
    data
  )
  return response
}

export const updateUserLived = async (query: ApiQuery, data: UserLivedRequestData) => {
  const response = await Fetch.Put<UserLivedRequestData, UserLived>(
    userApiPaths.updateLived + getApiQuery(query),
    data
  )
  return response
}

export const removeUsers = async (query: ApiQuery) => {
  const response = await Fetch.Delete<any>(userApiPaths.remove + getApiQuery(query))
  return response
}
