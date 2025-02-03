<script setup lang="ts">
import { computed, withDefaults, defineProps } from 'vue'
import { Typography, DynamicGrid } from '@/components/UI'
import type { DynamicGridItems } from '@/components/UI/DynamicGrid/type'
import type { Post } from '@/services/post/type'
import PostMedia from './PostMedia.vue'

const { Paragraph } = Typography

interface PostBodyProps {
  post: Post;
  hasMediaContent?: boolean
}

const props = withDefaults(defineProps<PostBodyProps>(), {
  hasMediaContent: true
})

const items = computed<DynamicGridItems>(() =>
  [...props.post.medias].map((media, idx) => ({
    id: String(media.id),
    comName: `item-${idx}`,
    data: media
  }))
)

const showMedia = computed<boolean>(() => props.hasMediaContent && items.value.length > 0)
</script>

<template>
  <Paragraph>
    {{ post.content }}
  </Paragraph>
  <div v-if="showMedia" class="mt-5 mb-5">
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
