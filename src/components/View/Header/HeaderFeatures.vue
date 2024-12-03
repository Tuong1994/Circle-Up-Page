<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { Space } from '@/components/UI'
import type { FeatureType } from './type'
import Profile from './Features/Profile/ProfileIcon.vue'
import Notification from './Features/Notification/NotificationIcon.vue'
import Features from './Features/Features.vue'
import useViewPoint from '@/hooks/useViewPoint'

const { isPhone } = useViewPoint()

const featureRef = ref<HTMLDivElement | null>(null)

const type = ref<FeatureType | undefined>(undefined)

const iconSize = computed<number>(() => (isPhone.value ? 14 : 18))

const handleOpenFeatures = (featureType: FeatureType) => {
  if (!featureType) return
  if (type.value === featureType) return (type.value = undefined)
  type.value = featureType
}

watchEffect((onStop) => {
  const handleClickOutside = (e: any) => {
    if (!featureRef.value) return
    if (!featureRef.value.contains(e.target)) type.value = undefined
  }
  window.addEventListener('mousedown', handleClickOutside)
  onStop(() => window.removeEventListener('mousedown', handleClickOutside))
})
</script>

<template>
  <div ref="featureRef" class="header-features">
    <Space justify="end" aligns="middle">
      <Notification :responsive="isPhone" :iconSize="iconSize" @onClick="handleOpenFeatures" />
      <Profile :responsive="isPhone" :iconSize="iconSize" @onClick="handleOpenFeatures" />
    </Space>
    <Features
      :open="type !== undefined"
      :type="type"
      @onClick="handleOpenFeatures"
      @onBack="handleOpenFeatures"
    />
  </div>
</template>
