<script setup lang="ts">
import { computed } from 'vue'
import { Grid } from '@/components/UI'
import { useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/useViewPoint'
import HeaderNav from './HeaderNav.vue'
import HeaderSearch from './HeaderSearch.vue'
import HeaderFeatures from './HeaderFeatures.vue'
import HeaderMenuMobile from './HeaderMenuMobile.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { SM_PHONE, SM_TABLET } = breakpoint

const { isPhone, screenWidth } = useViewPoint()

const layout = useLayoutStore()

const themeClassName = computed<string>(() => `header-${layout.theme}`)

const colorClassName = computed<string>(() => `header-${layout.color}`)

const shapeClassName = computed<string>(() => `header-${layout.shape}`)

const iconSize = computed<number>(() => (isPhone.value ? 14 : 18))

const responsive = computed<boolean>(() => screenWidth.value >= SM_PHONE && screenWidth.value <= SM_TABLET)
</script>

<template>
  <div :class="['header', shapeClassName, themeClassName, colorClassName]">
    <HeaderNav v-if="responsive" :iconSize="iconSize" />
    <Row aligns="middle" justify="between">
      <Col :xs="3" :span="6">
        <HeaderSearch :responsive="isPhone" />
      </Col>
      <Col :xs="0" :md="responsive ? 0 : 8" :lg="8" :span="10">
        <HeaderNav />
      </Col>
      <Col :span="6">
        <HeaderFeatures :responsive="responsive" />
      </Col>
    </Row>
  </div>
</template>
