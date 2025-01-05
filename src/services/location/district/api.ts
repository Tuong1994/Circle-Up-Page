import { getApiQuery } from '@/services/helper'
import type { ApiQuery, Paging } from '@/services/type'
import type { District, DistrictRequestData } from './type'
import districtApiPaths from './path'
import Fetch from '@/services'

export const getDistricts = async (query: ApiQuery) => {
  const response = await Fetch.Get<Paging<District>>(districtApiPaths.list + getApiQuery(query))
  return response
}

export const getDistrict = async (query: ApiQuery) => {
  const response = await Fetch.Get<District>(districtApiPaths.detail + getApiQuery(query))
  return response
}

export const createDistrict = async (data: DistrictRequestData) => {
  const response = await Fetch.Post<DistrictRequestData, District>(districtApiPaths.create, data)
  return response
}

export const updateDistrict = async (query: ApiQuery, data: DistrictRequestData) => {
  const response = await Fetch.Put<DistrictRequestData, any>(
    districtApiPaths.update + getApiQuery(query),
    data
  )
  return response
}

export const removeDistricts = async (query: ApiQuery) => {
  const response = await Fetch.Delete<any>(districtApiPaths.remove + getApiQuery(query))
  return response
}
