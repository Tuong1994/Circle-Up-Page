<script setup lang="ts">
import { toRefs, watch, withDefaults, defineProps, defineEmits, computed } from 'vue'
import { useRender, useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/features/useViewPoint'
import type { FeatureType } from '../type'
import Profile from './Profile/Profile.vue'
import Notification from './Notification/Notification.vue'

interface FeaturesProps {
  open: boolean
  type: FeatureType | undefined
}

const props = withDefaults(defineProps<FeaturesProps>(), {
  open: false
})

const emits = defineEmits(['onClick', 'onBack'])

const { screenWidth } = useViewPoint()

const { SM_PHONE, SM_TABLET } = breakpoint

const { open } = toRefs(props)

const render = useRender(open)

const activeClassName = computed<string>(() => (props.open ? 'features-active' : ''))

const responsive = computed<boolean>(() => screenWidth.value >= SM_PHONE && screenWidth.value <= SM_TABLET)

const handleClick = () => emits('onClick')

const handleBack = (type: FeatureType) => emits('onBack', type)

watch(open, (newVal) => {
  if (!responsive.value) return
  if (newVal) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'unset'
})
</script>

<template>
  <div v-if="render" :class="['features', activeClassName]" @click="handleClick">
    <Notification v-if="type === 'notification'" :responsive="responsive" @onBack="handleBack" />
    <Profile v-if="type === 'profile'" :responsive="responsive" @onBack="handleBack" />
  </div>
</template>
