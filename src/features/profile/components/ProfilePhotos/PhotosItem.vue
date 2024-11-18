<script setup lang="ts">
import { Image, Typography } from '@/components/UI'
import { RouterLink } from 'vue-router';
import { routePaths } from '@/router';
import defaultImg from '/default.jpg'

const { Paragraph } = Typography
</script>

<template>
  <RouterLink :to="routePaths.PROFILE_ALBUM" class="photos-item">
    <div class="item-image">
      <Image :src="defaultImg" rootClassName="image-view" imgWidth="100%" imgHeight="100%" />
    </div>
    <div class="item-desc">
      <Paragraph :weight="600">Album name</Paragraph>
      <Paragraph>1 item</Paragraph>
    </div>
  </RouterLink>
</template>
