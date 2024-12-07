<script setup lang="ts">
import { computed, withDefaults, defineProps } from 'vue'
import { Typography, DynamicGrid, Image } from '@/components/UI'
import { RouterLink } from 'vue-router'
import { routePaths } from '@/router'

const { Paragraph } = Typography

interface PostBodyProps {
  hasMediaContent?: boolean
}

withDefaults(defineProps<PostBodyProps>(), {
  hasMediaContent: true
})

const items = computed(() => [
  { id: '1', comName: 'item-1', url: '/default.jpg' },
  { id: '2', comName: 'item-2', url: '/default.jpg' },
  { id: '3', comName: 'item-3', url: '/default.jpg' },
  { id: '4', comName: 'item-4', url: '/default.jpg' },
  { id: '5', comName: 'item-5', url: '/default.jpg' },
  { id: '6', comName: 'item-6', url: '/default.jpg' },
  { id: '7', comName: 'item-7', url: '/default.jpg' },
  { id: '8', comName: 'item-8', url: '/default.jpg' },
  { id: '9', comName: 'item-9', url: '/default.jpg' },
  { id: '10', comName: 'item-10', url: '/default.jpg' },
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
          <RouterLink v-if="content.comName === item.comName" :to="routePaths.POST_DETAIL">
            <Image :src="item.url" rootClassName="post-image" imgWidth="100%" imgHeight="100%" />
          </RouterLink>
        </template>
      </template>

      <template #contentLeft="content">
        <template v-for="item in content.items" :key="item.id">
          <RouterLink v-if="content.comName === item.comName" :to="routePaths.POST_DETAIL">
            <Image :src="item.url" rootClassName="post-image" imgWidth="100%" imgHeight="100%" />
          </RouterLink>
        </template>
      </template>

      <template #contentRight="content">
        <template v-for="item in content.items" :key="item.id">
          <RouterLink v-if="content.comName === item.comName" :to="routePaths.POST_DETAIL">
            <Image :src="item.url" rootClassName="post-image" imgWidth="100%" imgHeight="100%" />
          </RouterLink>
        </template>
      </template>
    </DynamicGrid>
  </div>
</template>
