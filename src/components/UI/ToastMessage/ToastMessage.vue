<script setup lang="ts">
import { computed, withDefaults, type StyleValue } from 'vue'
import { useRender } from '@/hooks'
import ToastItem from './ToastItem.vue'
import useToastStore from './ToastStore.ts'
import useLayoutStore from '../Layout/LayoutStore.ts'

export interface ToastMessageProps {
  rootClassName?: string
  itemClassName?: string
  rootStyle?: StyleValue
  itemStyle?: StyleValue
  showProgress?: boolean
}

withDefaults(defineProps<ToastMessageProps>(), {
  rootClassName: '',
  itemClassName: '',
  showProgress: true
})

const layout = useLayoutStore()

const toastStore = useToastStore()

const themeClassName = computed<string>(() => `toast-message-${layout.theme}`)

const hasToast = computed<boolean>(() => toastStore.toastMessages.length > 0)

const render = useRender(hasToast)
</script>

<template>
  <Teleport to="#portal">
    <div v-if="render" :style="rootStyle" :class="['toast-message', themeClassName, rootClassName]">
      <ToastItem
        v-for="toast in toastStore.toastMessages"
        :key="toast.id"
        :toast="toast"
        :itemStyle="itemStyle"
        :itemClassName="itemClassName"
        :showProgress="showProgress"
      />
    </div>
  </Teleport>
</template>
