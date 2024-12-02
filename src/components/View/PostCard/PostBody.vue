<script setup lang="ts">
import { computed, withDefaults, defineProps } from 'vue'
import { Typography } from '@/components/UI'
import DynamicGrid from './DynamicGrid.vue'

const { Paragraph } = Typography

interface PostBodyProps {
  hasMediaContent?: boolean
}

withDefaults(defineProps<PostBodyProps>(), {
  hasMediaContent: true
})

const items = computed(() => [
  { id: '1', url: '/default.jpg' },
  { id: '2', url: '/default.jpg' },
  { id: '3', url: '/default.jpg' },
  { id: '4', url: '/default.jpg' },
  { id: '5', url: '/default.jpg' },
  { id: '6', url: '/default.jpg' },
  { id: '7', url: '/default.jpg' }
])
</script>

<template>
  <Paragraph>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati consectetur eaque veritatis,
    accusantium libero doloribus neque ducimus ab unde quam delectus assumenda aperiam deleniti sapiente, fuga
    recusandae laborum blanditiis nihil.
  </Paragraph>
  <div v-if="hasMediaContent" class="mt-5 mb-5">
    <DynamicGrid :items="items" />
  </div>
</template>
