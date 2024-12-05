<script setup lang="ts">
import { computed, defineEmits } from 'vue'
import { Carousel, Image } from '@/components/UI'
import type { CarouselItems } from '@/components/UI/Carousel/type'
import CarouselHeader from './CarouselHeader.vue'

const { Horizontal } = Carousel

const emits = defineEmits(['onOpenContent'])

const items = computed<CarouselItems>(() => [
  { id: '1', comName: 'item-1', url: '/default.jpg' },
  { id: '2', comName: 'item-2', url: '/default.jpg' },
  { id: '3', comName: 'item-3', url: '/default.jpg' }
])

const handleOpenContent = () => emits('onOpenContent')
</script>

<template>
  <div class="detail-carousel">
    <CarouselHeader @onOpen="handleOpenContent" />
    <Horizontal :items="items" mode="light">
      <template #content="item">
        <template v-for="(slide, idx) in items">
          <div :key="`item-${idx}`" v-if="item.slide === slide.comName" class="carousel-item">
            <Image rootClassName="item-image" :src="slide.url" />
          </div>
        </template>
      </template>
    </Horizontal>
  </div>
</template>
