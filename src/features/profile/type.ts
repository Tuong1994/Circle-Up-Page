import type { DateFilter } from '@/common/type'
import type { EAboutTabFormType } from './enum'

export type AboutTabFormType =
  | EAboutTabFormType.COMMON
  | EAboutTabFormType.PHONE
  | EAboutTabFormType.GENDER
  | EAboutTabFormType.BIRTHDAY
  | EAboutTabFormType.WORK
  | EAboutTabFormType.EDUCATION
  | EAboutTabFormType.LIVED
  | EAboutTabFormType.RELATIONSHIP

export type ProfileWork = {
  id: string
  company: string
  position: string
  city: string
  desc: string
  isCurrentJob: boolean
  startDate: DateFilter
  endDate: DateFilter
}

export type ProfileEducation = {
  id: string
  school: string
  desc: string
  isGraduated: boolean
  startDate: DateFilter
  endDate: DateFilter
}
