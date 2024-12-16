<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import { Image, Typography } from '@/components/UI'
import { RouterLink } from 'vue-router'
import { routePaths } from '@/router'
import defaultImg from '/default.jpg'

const { Paragraph } = Typography

interface PhotosItemProps {
  hasDesc?: boolean
  descTitle?: string
  descSub?: string
  path?: string
}

withDefaults(defineProps<PhotosItemProps>(), {
  path: routePaths.PROFILE_PHOTOS
})
</script>

<template>
  <RouterLink :to="path" class="photos-item">
    <div class="item-image">
      <Image :src="defaultImg" rootClassName="image-view" imgWidth="100%" imgHeight="100%" objectFit="cover" />
    </div>
    <div v-if="hasDesc" class="item-desc">
      <Paragraph :weight="600" rootClassName="desc-content">
        {{ descTitle }}
      </Paragraph>
      <Paragraph :size="13" rootClassName="desc-content">
        {{ descSub }}
      </Paragraph>
    </div>
  </RouterLink>
</template>
