import type { DateFilter } from '@/common/type'
import type { EAboutTabFormType, EProfileTabType } from './enum'

export type AboutTabFormType =
  | EAboutTabFormType.COMMON
  | EAboutTabFormType.PHONE
  | EAboutTabFormType.GENDER
  | EAboutTabFormType.BIRTHDAY
  | EAboutTabFormType.WORK
  | EAboutTabFormType.EDUCATION
  | EAboutTabFormType.LIVED
  | EAboutTabFormType.RELATIONSHIP

export type ProfileTab = {
  id: EProfileTabType
  title: string
}

export type ProfileTabs = ProfileTab[]

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

export type ProfileLived = {
  id: string
  city: string
  town: string
}

export type ProfileRelationship = {
  id: string
  relationship: string
}
