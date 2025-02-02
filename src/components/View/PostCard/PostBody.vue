<script setup lang="ts">
import { computed, withDefaults, defineProps } from 'vue'
import { Typography, DynamicGrid } from '@/components/UI'
import type { Post } from '@/services/post/type'
import type { DynamicGridItems } from '@/components/UI/DynamicGrid/type'
import PostMedia from './PostMedia.vue'

const { Paragraph } = Typography

interface PostBodyProps {
  post: Post;
  hasMediaContent?: boolean
}

withDefaults(defineProps<PostBodyProps>(), {
  hasMediaContent: true
})

const items = computed<DynamicGridItems>(() => [
  { id: '1', comName: 'item-1' },
  { id: '2', comName: 'item-2' },
  { id: '3', comName: 'item-3' },
  { id: '4', comName: 'item-4' },
  { id: '5', comName: 'item-5' },
  { id: '6', comName: 'item-6' },
  { id: '7', comName: 'item-7' },
  { id: '8', comName: 'item-8' },
  { id: '9', comName: 'item-9' },
  { id: '10', comName: 'item-10' }
])
</script>

<template>
  <Paragraph>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati consectetur eaque veritatis,
    accusantium libero doloribus neque ducimus ab unde quam delectus assumenda aperiam deleniti sapiente, fuga
    recusandae laborum blanditiis nihil.
  </Paragraph>
  <div v-if="hasMediaContent" class="mt-5 mb-5">
    <DynamicGrid :items="items">
      <template #content="content">
        <template v-for="item in items" :key="item.id">
          <PostMedia v-if="content.comName === item.comName" url="/default.jpg" />
        </template>
      </template>

      <template #contentLeft="content">
        <template v-for="item in content.items" :key="item.id">
          <PostMedia v-if="content.comName === item.comName" url="/default.jpg" />
        </template>
      </template>

      <template #contentRight="content">
        <template v-for="item in content.items" :key="item.id">
          <PostMedia v-if="content.comName === item.comName" url="/default.jpg" />
        </template>
      </template>
    </DynamicGrid>
  </div>
</template>
