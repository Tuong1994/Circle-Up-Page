export type District = {
  id?: string
  name: string
  code: number
  cityCode: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type DistrictRequestData = Pick<District, 'code' | 'cityCode'> & {
  nameEn: string
  nameVn: string
}
