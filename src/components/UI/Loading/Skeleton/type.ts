import type { ComponentShape } from '@/common/type'
import type { StyleValue } from 'vue'
import type { LayoutShape } from '../../Layout/LayoutStore'

type CommonOptions = {
  width?: number | string
  height?: number | string
  shape?: LayoutShape
}

export type TitleOptions = CommonOptions

export type ButtonOptions = CommonOptions

export type ParagraphOptions = CommonOptions & {
  lines?: number,
  linesClassName?: string;
  linesStyle?: StyleValue;
}

export type ImageOptions = CommonOptions & {
  size?: number
  shape?: LayoutShape
}

export type SkeletonType = 'title' | 'paragraph' | 'image' | 'button'

export type TitleSkeletonProps = {
  type: 'title'
  options?: TitleOptions
}

export type ParagraphSkeletonProps = {
  type: 'paragraph'
  options?: ParagraphOptions
}

export type ImageSkeletonProps = {
  type: 'image'
  options?: ImageOptions
}

export type ButtonSkeletonProps = {
  type: 'button'
  options?: ButtonOptions
}
