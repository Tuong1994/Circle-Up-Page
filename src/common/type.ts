import type { VN } from './lang/vn'
import type { EN } from './lang/en'

export type Lang = VN | EN

export type ComponentShape = 'square' | 'circle' | 'round'

export type ComponentSize = 'sm' | 'md' | 'lg'

export type ComponentColor =
  | 'blue'
  | 'green'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'purple'
  | 'pink'
  | 'black'
  | 'white'
  | 'gray'

export type ComponentJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'

export type ComponentAligns = 'top' | 'middle' | 'bottom' | 'baseline'

export type ComponentPlacement = 'left' | 'right' | 'top' | 'bottom'

export type DateFilter = {
  year: number
  month: number
  date: number
}
