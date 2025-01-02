import type { EAudienceType } from '@/components/View/Audiences/enum'
import type { ERole, EUserInfoType } from './enum'

export type DateRange = {
  id?: string
  year: number
  month: number
  date: number
  startDateId?: string
  endDateId?: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type TimePeriod = {
  id?: string
  userWorkId?: string
  userEducationId?: string
  startDate?: DateRange
  endDate?: DateRange
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type UserEmail = {
  id?: string
  email: string
  password: string
  userId: string
  audience: EAudienceType
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type UserInfo = {
  id?: string
  content: string
  userId: string
  type: EUserInfoType
  audience: EAudienceType
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type UserWork = {
  id?: string
  company: string
  position: string
  cityCode: number
  isCurrently: boolean
  description: string
  userId: string
  audience: EAudienceType
  timePeriod: TimePeriod
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type UserEducation = {
  id?: string
  school: string
  isGraduated: boolean
  description: string
  userId: string
  audience: EAudienceType
  timePeriod?: TimePeriod
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type UserLived = {
  id?: string
  cityCode: number
  districtCode: number
  userId: string
  audience: EAudienceType
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type User = {
  id?: string
  firstName: string
  lastName: string
  role: ERole
  fullName?: string
  resetToken?: string
  resetTokenExpires?: number
  account?: UserEmail
  lived?: UserLived
  infos?: UserInfo[]
  works?: UserWork[]
  educations?: UserEducation[]
  createdAt?: Date | string
  updatedAt?: Date | string
}
