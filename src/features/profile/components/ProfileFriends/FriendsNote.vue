<script setup lang="ts">
import { defineProps } from 'vue'
import { Paragraph } from '@/components/UI/Typography'

interface FriendsNoteProps {
  message?: string
}

defineProps<FriendsNoteProps>()
</script>

<template>
  <div class="w-full h-full py-20 flex justify-center items-center">
    <Paragraph :weight="600" :size="20" variant="secondary">{{ message }}</Paragraph>
  </div>
</template>
