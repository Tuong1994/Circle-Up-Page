<script setup lang="ts">
import { computed, withDefaults, defineProps } from 'vue'
import { Typography, DynamicGrid, Image } from '@/components/UI'
// import DynamicGrid from './DynamicGrid.vue'

const { Paragraph } = Typography

interface PostBodyProps {
  hasMediaContent?: boolean
}

withDefaults(defineProps<PostBodyProps>(), {
  hasMediaContent: true
})

const items = computed(() => [
  { id: '1', comName: 'item-1', url: '/default.jpg' }
  // { id: '2', url: '/default.jpg' },
  // { id: '3', url: '/default.jpg' },
  // { id: '4', url: '/default.jpg' },
  // { id: '5', url: '/default.jpg' },
  // { id: '6', url: '/default.jpg' },
  // { id: '7', url: '/default.jpg' }
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
      <template #content="name">
        <template v-for="item in items" :key="item.id">
          <Image
            v-if="name.content === item.comName"
            :src="item.url"
            rootClassName="post-image"
            imgWidth="100%"
            imgHeight="100%"
          />
        </template>
      </template>
    </DynamicGrid>
  </div>
</template>
