<script setup lang="ts">
import { computed, withDefaults, toRefs, type StyleValue } from 'vue'
import { iconType } from './constant.ts'
import type { ComponentColor } from '@/common/type'

export interface IconProps {
  rootClassName?: string | string[]
  rootStyle?: StyleValue
  type?: string
  size?: number
  color?: Exclude<ComponentColor, 'white'>
  iconName: string
}

const props = withDefaults(defineProps<IconProps>(), {
  rootClassName: '',
  type: iconType.FAS
})

const { rootStyle } = toRefs(props)

const colorClassName = computed<string>(() => (props.color ? `icon-${props.color}` : ''))

const iconStyle = computed<StyleValue>(() => ({
  ...(rootStyle?.value as object),
  fontSize: `${props.size}px`
}))
</script>

<template>
  <fa :icon="[type, iconName]" :class="[colorClassName, rootClassName]" :style="iconStyle" />
</template>
