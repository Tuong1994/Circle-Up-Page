<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'
import { Image, Button, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { useUploadMedia } from '@/hooks'
import type { UploadItem } from '@/components/Control/type'
import ListGrid from '@/components/View/ListGrid/ListGrid.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useMediaStore from '@/stores/MediaStore'

interface AlbumListProps {
  hasTitle?: boolean
}

const props = withDefaults(defineProps<AlbumListProps>(), {
  hasTitle: true
})

const media = useMediaStore()

const layout = useLayoutStore()

const { handleRemove: onRemoveImage } = useUploadMedia()

const title = computed<string>(() => (props.hasTitle ? 'Album photos' : ''))

const handleRemove = (item: UploadItem) => onRemoveImage(item)
</script>

<template>
  <ListGrid :xs="2" :md="2" :lg="3" :span="4" :title="title" rootClassName="album-list">
    <div v-for="item in media.viewImages" :key="item.id" class="list-item">
      <Button
        text
        :color="layout.color"
        :shape="layout.shape"
        rootClassName="item-remove"
        @click="() => handleRemove(item)"
      >
        <Icon :size="20" :iconName="iconName.X_MARK" />
      </Button>
      <Image
        :src="item.url"
        rootClassName="image-full-size"
        imgWidth="100%"
        imgHeight="100%"
        objectFit="cover"
      />
    </div>
  </ListGrid>
</template>
