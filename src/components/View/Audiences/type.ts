import type { EAudienceType } from './enum'

export type AudienceType = EAudienceType.FRIENDS | EAudienceType.PUBLIC | EAudienceType.PRIVATE

export type Audience = {
  type: AudienceType
  name: string
  content: string
  icon: string
}
