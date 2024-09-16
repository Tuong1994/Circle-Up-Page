import type { ComponentPlacement } from '@/common/type'

export type MentionPlacement = Exclude<ComponentPlacement, 'left' | 'right'>

export type MentionPosition = {
  top?: number
  bottom?: number
  left: number
}

export type MentionItem = {
  label: string
  value: string | number
  imgUrl?: string
}

export type MentionItems = MentionItem[]
