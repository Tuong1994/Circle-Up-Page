<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Grid, Carousel, Image, Divider, Space, Button, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { routePaths } from '@/router'
import type { CarouselItems } from '@/components/UI/Carousel/type'
import PostHead from '@/components/View/PostCard/PostHead.vue'
import PostBody from '@/components/View/PostCard/PostBody.vue'
import PostSummary from '@/components/View/PostCard/PostSummary.vue'
import PostActions from '@/components/View/PostCard/PostActions.vue'
import PostContentHeader from '@/features/post/PostContentHeader.vue'
import Logo from '@/components/View/Logo/Logo.vue'
import Comment from '@/components/View/Comment/Comment.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { Horizontal } = Carousel

const layout = useLayoutStore()

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
          <div class="carousel-header">
            <Space aligns="middle">
              <RouterLink :to="routePaths.HOME">
                <Button :color="layout.color" shape="round">
                  <Icon :iconName="iconName.ANGLE_LEFT" />
                </Button>
              </RouterLink>
              <Logo :size="60" />
            </Space>
          </div>
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
          <PostContentHeader />
          <div class="content-main">
            <PostHead :hasRemove="false" />
            <PostBody :hasMediaContent="false" />
            <PostSummary />
            <PostActions />
            <Divider />
            <Comment />
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>
