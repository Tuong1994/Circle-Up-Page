<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'
import { Card, Image } from '@/components/UI'
import { EPhotoViewType } from '../../enum'
import ListGrid from '@/components/View/ListGrid/ListGrid.vue'
import defaultImg from '/default.jpg'

interface AlbumPhotosProps {
  viewType: EPhotoViewType
}

withDefaults(defineProps<AlbumPhotosProps>(), {
  viewType: EPhotoViewType.GRID
})
</script>

<template>
  <Card>
    <template #body>
      <ListGrid :span="3">
        <Image v-for="item in 10" :src="defaultImg" rootClassName="album-photo" />
      </ListGrid>
    </template>
  </Card>
</template>
