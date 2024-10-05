<script setup lang="ts">
import { toRefs, withDefaults, defineProps, defineEmits, defineExpose, ref, computed } from 'vue'
import { useOverflow, useRender, useViewPoint } from '@/hooks'
import { screen } from '@/hooks/useViewPoint'
import type { FeatureType } from '../type'
import Profile from './Profile.vue'
import Notification from './Notification.vue'

interface FeaturesProps {
  open: boolean
  type: FeatureType | undefined
}

const props = withDefaults(defineProps<FeaturesProps>(), {
  open: false
})

const emits = defineEmits(['onClick', 'onBack'])

const { screenWidth } = useViewPoint()

const { open } = toRefs(props)

const featuresRef = ref<HTMLDivElement>()

const render = useRender(open)

useOverflow(open)

const activeClassName = computed<string>(() => (props.open ? 'features-active' : ''))

const responsive = computed<boolean>(
  () => screenWidth.value >= screen.SM_PHONE && screenWidth.value <= screen.SM_TABLET
)

const handleClick = () => emits('onClick')

const handleBack = (type: FeatureType) => emits('onBack', type)

defineExpose({ featuresRef })
</script>

<template>
  <div ref="featuresRef" v-if="render" :class="['features', activeClassName]" @click="handleClick">
    <Notification v-if="type === 'notification'" :responsive="responsive" @onBack="handleBack" />
    <Profile v-if="type === 'profile'" :responsive="responsive" @onBack="handleBack" />
  </div>
</template>
