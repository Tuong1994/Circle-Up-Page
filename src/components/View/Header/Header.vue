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
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { isPhone } = useViewPoint()

const layout = useLayoutStore()

const featureRef = ref<HTMLDivElement | null>(null)

const type = ref<FeatureType | undefined>(undefined)

const colorClassName = computed<string>(() => `header-${layout.color}`)

const shapeClassName = computed<string>(() => `header-${layout.shape}`)

const iconSize = computed<number>(() => (isPhone.value ? 14 : 18))

const handleOpenFeatures = (featureType: FeatureType) => {
  if (!featureType) return
  if (type.value === featureType) return (type.value = undefined)
  type.value = featureType
}
</script>

<template>
  <div :class="['header', shapeClassName, colorClassName]">
    <Navbar v-if="isPhone" :iconSize="iconSize" />
    <Row aligns="middle" justify="between">
      <Col :xs="3" :span="6">
        <SearchInput :responsive="isPhone" />
      </Col>
      <Col :xs="0" :md="0" :lg="8" :span="10">
        <Navbar />
      </Col>
      <Col :span="6">
        <Space justify="end" aligns="middle">
          <Notification :responsive="isPhone" :iconSize="iconSize" @onClick="handleOpenFeatures" />
          <Profile :responsive="isPhone" :iconSize="iconSize" @onClick="handleOpenFeatures" />
        </Space>
      </Col>
      <Features ref="featureRef" :open="type !== undefined" :type="type" @onClick="handleOpenFeatures" />
    </Row>
  </div>
</template>
