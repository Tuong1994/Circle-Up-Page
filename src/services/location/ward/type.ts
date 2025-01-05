export type Ward = {
  id?: string
  name: string
  code: number
  districtCode: number
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type WardRequestData = Omit<Ward, 'code' | 'districtCode'> & {
  nameEn: string
  nameVn: string
}
