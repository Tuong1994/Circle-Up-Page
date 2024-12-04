<script setup lang="ts">
import { Grid } from '@/components/UI'
import PostContent from '@/features/post/PostContent.vue'
import PostCarousel from '@/features/post/PostCarousel.vue'

const { Row, Col } = Grid
</script>

<template>
  <div class="post-detail">
    <Row :gutters="[0]">
      <Col :xs="24" :span="16">
        <PostCarousel />
      </Col>
      <Col :xs="0" :span="8">
        <PostContent />
      </Col>
    </Row>
  </div>

</template>
