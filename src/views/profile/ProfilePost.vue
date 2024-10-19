<script setup lang="ts">
import { computed, ref, watchEffect, type StyleValue } from 'vue'
import { Grid } from '@/components/UI'
import PostCard from '@/components/View/PostCard/PostCard.vue'
import PostFilter from '@/features/profile/components/ProfilePost/PostFilter.vue'
import PostIntro from '@/features/profile/components/ProfilePost/PostIntro.vue'
import PostPhotos from '@/features/profile/components/ProfilePost/PostPhotos.vue'

const { Row, Col } = Grid

watchEffect(() => {
  window.addEventListener('scroll', () => {
    const leftSide = document.getElementById('leftSide')
    const rightSide = document.getElementById('rightSide')
    const head = document.querySelector('.profile-head')
    if (!leftSide || !rightSide || !head) return
    const windowTop = window.scrollY
    const windowBottom = windowTop + window.innerHeight - head.clientHeight
    const leftSideTop = leftSide.offsetTop
    const leftSideHeight = leftSide.clientHeight
    const leftSideWidth = leftSide.clientWidth
    const leftSideBottom = leftSideTop + leftSideHeight
    if (windowBottom >= leftSideBottom) {
      leftSide.style.position = 'fixed'
      leftSide.style.bottom = '0px'
      rightSide.style.marginLeft = leftSideWidth + 10 + 'px'
    } else {
      leftSide.style.position = 'relative'
      leftSide.style.bottom = ''
      rightSide.style.marginLeft = '10px'
    }
  })
})
</script>

<template>
  <div class="profile-post">
    <div id="leftSide" class="post-left-side">
      <PostIntro />
      <PostPhotos />
    </div>
    <div id="rightSide" class="post-right-side">
      <PostFilter />
      <PostCard v-for="item in 10" />
    </div>
  </div>
</template>
