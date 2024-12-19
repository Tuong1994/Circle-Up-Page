<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import { Icon, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'

const { Paragraph } = Typography

interface PhotosControlProps {
  label?: string
  path?: string
}

defineProps<PhotosControlProps>()
</script>

<template>
  <RouterLink :to="String(path)" class="photos-control">
    <div class="control-icon">
      <Icon :iconName="iconName.PLUS" :size="30" rootClassName="icon" />
    </div>
    <Paragraph aligns="center" :weight="600" rootClassName="control-label">
      {{ label }}
    </Paragraph>
  </RouterLink>
</template>
