<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Drawer } from '@/components/UI'
import PostContent from './PostContent.vue'

interface PostContentMobileProps {
  open?: boolean
}

defineProps<PostContentMobileProps>()

const emits = defineEmits(['onClose'])

const handleClose = () => emits('onClose')
</script>

<template>
  <Drawer full :hasHead="false" :open="open">
    <template #body>
      <PostContent @onBack="handleClose" />
    </template>
  </Drawer>
</template>
