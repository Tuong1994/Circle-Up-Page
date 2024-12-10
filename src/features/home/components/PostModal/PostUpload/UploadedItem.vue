<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue'
import { Icon, Button, Image } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import type { UploadItem } from '@/components/Control/type'
import type { DynamicGridItem } from '@/components/UI/DynamicGrid/type'

interface UploadedItemProps {
  item: DynamicGridItem<UploadItem>
  hasRemove?: boolean
}

const props = withDefaults(defineProps<UploadedItemProps>(), {
  hasRemove: true
})

const emits = defineEmits(['onRemove'])

const handleRemove = () => emits('onRemove', props.item)
</script>

<template>
  <div class="upload-item">
    <Button v-if="hasRemove" text rootClassName="item-remove" @click="handleRemove">
      <Icon :iconName="iconName.X_MARK" :size="24" />
    </Button>
    <Image :src="item.data?.url" objectFit="cover" rootClassName="item-media" imgWidth="100%" imgHeight="100%" />
  </div>
</template>
