<script setup lang="ts">
import { computed, ref } from 'vue'
import { Grid } from '@/components/UI'
import { useViewPoint } from '@/hooks'
import PostContent from '@/features/post/PostContent.vue'
import PostCarousel from '@/features/post/PostCarousel.vue'
import PostContentMobile from '@/features/post/PostContentMobile.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const layout = useLayoutStore()

const { isPhone, isTablet, isLgTablet } = useViewPoint()

const openContent = ref<boolean>(false)

const responsive = computed<boolean>(() => isPhone.value || isTablet.value || isLgTablet.value)

const themeClassName = computed<string>(() => `post-detail-${layout.theme}`)

const handleOpenContent = () => (openContent.value = !openContent.value)
</script>

<template>
  <div :class="['post-detail', themeClassName]">
    <Row :gutters="[0]">
      <Col :xs="24" :md="24" :lg="isLgTablet ? 24 : 16" :span="16">
        <PostCarousel @onOpenContent="handleOpenContent" />
      </Col>
      <Col :xs="0" :md="0" :lg="isLgTablet ? 0 : 8" :span="8">
        <PostContent />
      </Col>
    </Row>
  </div>
  <PostContentMobile v-if="responsive" :open="openContent" @onClose="handleOpenContent" />
</template>
