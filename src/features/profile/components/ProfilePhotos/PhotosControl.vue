<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

interface PhotosControlProps {
  label?: string
  path?: string
}

defineProps<PhotosControlProps>()

const layout = useLayoutStore()

const colorClassName = computed<string>(() => `photos-control-${layout.color}`)
</script>

<template>
  <RouterLink :to="path" :class="['photos-control', colorClassName]">
    <div class="control-icon">
      <Icon :iconName="iconName.PLUS" :size="30" rootClassName="icon" />
    </div>
    <Paragraph aligns="center" :weight="600" rootClassName="control-label">
      {{ label }}
    </Paragraph>
  </RouterLink>
</template>
