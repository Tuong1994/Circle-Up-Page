<script setup lang="ts">
import { toRefs, withDefaults, defineProps, defineEmits, ref, computed } from 'vue'
import { useRender } from '@/hooks'
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

const emits = defineEmits(['onClick'])

const { open } = toRefs(props)

const featuresRef = ref<HTMLDivElement>()

const render = useRender(open)

const activeClassName = computed<string>(() => (props.open ? 'features-active' : ''))

const handleClick = () => emits('onClick')
</script>

<template>
  <div ref="featuresRef" v-if="render" :class="['features', activeClassName]" @click="handleClick">
    <Notification v-if="type === 'notification'" />
    <Profile v-if="type === 'profile'" />
  </div>
</template>
