<script setup lang="ts">
import { computed, ref, watchEffect, defineProps } from 'vue'
import { Space, Avatar, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import type { FeatureType } from './type'
import Profile from './Features/Profile/ProfileIcon.vue'
import Notification from './Features/Notification/NotificationIcon.vue'
import Features from './Features/Features.vue'
import useViewPoint from '@/hooks/useViewPoint'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import HeaderMenuMobile from './HeaderMenuMobile.vue'

interface HeaderFeaturesProps {
  responsive?: boolean
}

const props = defineProps<HeaderFeaturesProps>()

const { isPhone } = useViewPoint()

const layout = useLayoutStore()

const featureRef = ref<HTMLDivElement | null>(null)

const type = ref<FeatureType | undefined>(undefined)

const openMenu = ref<boolean>(false)

const iconSize = computed<number>(() => (isPhone.value ? 14 : 18))

const avatarSize = computed<number>(() => (props.responsive ? 30 : 40))

const themeClassName = computed<string>(() => `header-features-${layout.theme}`)

const handleOpenFeatures = (featureType: FeatureType) => {
  if (!featureType) return
  if (type.value === featureType) return (type.value = undefined)
  type.value = featureType
}

const handleOpenMenu = () => (openMenu.value = !openMenu.value)

const commonProps = computed(() => ({
  responsive: isPhone.value,
  avatarSize: avatarSize.value,
  iconSize: iconSize.value
}))

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
  <div ref="featureRef" :class="['header-features', themeClassName]">
    <Space justify="end" aligns="middle">
      <Notification v-bind="commonProps" @onClick="handleOpenFeatures" />
      <Profile v-bind="commonProps" @onClick="handleOpenFeatures" />
      <Avatar v-if="responsive" :size="avatarSize" :color="layout.color" @click="handleOpenMenu">
        <Icon :size="iconSize" :iconName="iconName.LIST" />
      </Avatar>
    </Space>
    <Features
      :open="type !== undefined"
      :type="type"
      @onClick="handleOpenFeatures"
      @onBack="handleOpenFeatures"
    />
    <HeaderMenuMobile v-if="responsive" :open="openMenu" @onClose="handleOpenMenu" />
  </div>
</template>
