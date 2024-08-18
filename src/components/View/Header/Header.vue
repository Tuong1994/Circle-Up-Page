<script setup lang="ts">
import { computed, ref } from 'vue'
import { Space, Grid } from '@/components/UI'
import { useViewPoint } from '@/hooks'
import type { FeatureType } from './type'
import Navbar from './Navbar.vue'
import SearchInput from './SearchInput.vue'
import Notification from './Features/NotificationIcon.vue'
import Profile from './Features/ProfileIcon.vue'
import Features from './Features/Features.vue'
import useHeaderStore from './HeaderStore'

const { Row, Col } = Grid

const header = useHeaderStore()

const { screenWidth } = useViewPoint()

const type = ref<FeatureType | undefined>(undefined)

const isRenderFeatures = computed<boolean>(() => {
  if (screenWidth.value >= 320 && screenWidth.value < 480) return !header.openSearch
  return true
})

const handleOpenFeatures = (featureType: FeatureType) => {
  if (!featureType) return
  if (type.value === featureType) return (type.value = undefined)
  type.value = featureType
}
</script>

<template>
  <Row aligns="middle" justify="between" rootClassName="header">
    <Col :xs="3" :span="6">
      <SearchInput />
    </Col>
    <Col :xs="0" :md="0" :lg="8" :span="10">
      <Navbar />
    </Col>
    <Col :span="6">
      <Space v-if="isRenderFeatures" justify="end" aligns="middle">
        <Notification @onClick="handleOpenFeatures" />
        <Profile @onClick="handleOpenFeatures" />
      </Space>
    </Col>
    <Features :open="type !== undefined" :type="type" @onClick="handleOpenFeatures" />
  </Row>
</template>