<script setup lang="ts">
import { computed, ref } from 'vue'
import { Carousel, Image } from '@/components/UI'
import type { CarouselItems } from '@/components/UI/Carousel/type'
import CarouselHeader from './CarouselHeader.vue'
import PostContentMobile from '@/features/post/PostContentMobile.vue'

const { Horizontal } = Carousel

const openContent = ref<boolean>(false)

const items = computed<CarouselItems>(() => [
  { id: '1', comName: 'item-1', url: '/default.jpg' },
  { id: '2', comName: 'item-2', url: '/default.jpg' },
  { id: '3', comName: 'item-3', url: '/default.jpg' }
])

const handleOpen = () => (openContent.value = true)
</script>

<template>
  <div class="detail-carousel">
    <CarouselHeader @onOpen="handleOpen" />
    <Horizontal :items="items" mode="light">
      <template #content="item">
        <template v-for="(slide, idx) in items">
          <div :key="`item-${idx}`" v-if="item.slide === slide.comName">
            <Image :src="slide.url" />
          </div>
        </template>
      </template>
    </Horizontal>
  </div>
  <PostContentMobile :open="openContent" />
</template>
