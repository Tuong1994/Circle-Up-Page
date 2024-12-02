<script setup lang="ts">
import { computed } from 'vue'
import { Grid, Carousel, Image, Divider } from '@/components/UI'
import type { CarouselItems } from '@/components/UI/Carousel/type'
import PostHead from '@/components/View/PostCard/PostHead.vue'
import PostBody from '@/components/View/PostCard/PostBody.vue'
import PostSummary from '@/components/View/PostCard/PostSummary.vue'
import PostActions from '@/components/View/PostCard/PostActions.vue'
import Comment from '@/components/View/Comment/Comment.vue'

const { Row, Col } = Grid

const { Horizontal } = Carousel

const items = computed<CarouselItems>(() => [
  { id: '1', comName: 'item-1', url: '/default.jpg' },
  { id: '2', comName: 'item-2', url: '/default.jpg' },
  { id: '3', comName: 'item-3', url: '/default.jpg' }
])
</script>

<template>
  <div class="post-detail">
    <Row :gutters="[0]">
      <Col :span="16">
        <div class="detail-carousel">
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
      </Col>
      <Col :span="8">
        <div class="detail-content">
          <PostHead :hasRemove="false" />
          <PostBody :hasMediaContent="false" />
          <PostSummary />
          <PostActions />
          <Divider />
          <Comment />
        </div>
      </Col>
    </Row>
  </div>
</template>
