<script setup lang="ts">
import { computed } from 'vue'
import { useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/features/useViewPoint'
import { Section } from '@/components/UI'
import AlbumList from '@/features/media/AlbumList.vue'
import AlbumEmpty from '@/features/media/AlbumEmpty.vue'
import AlbumMobile from '@/features/media/AlbumMobile.vue'
import useMediaStore from '@/stores/MediaStore'

const media = useMediaStore()

const { screenWidth } = useViewPoint()

const { MD_TABLET } = breakpoint

const isMobile = computed<boolean>(() => screenWidth.value < MD_TABLET)

const isEmpty = computed<boolean>(() => !media.viewImages.length)
</script>

<template>
  <Section rootClassName="album">
    <AlbumMobile v-if="isMobile" />
    <template v-if="!isMobile">
      <AlbumEmpty v-if="isEmpty" />
      <AlbumList v-else />
    </template>
  </Section>
</template>
