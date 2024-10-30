<script setup lang="ts">
import { computed, defineEmits } from 'vue'
import { Button, Space, Typography } from '@/components/UI'
import MenuHead from './MenuHead.vue'
import useLangStore from '@/stores/LangStore'
import useLayoutStore, { type LayoutColor } from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

const emits = defineEmits(['onBack'])

const t = useLangStore()

const layout = useLayoutStore()

const colors = computed(() => ['blue', 'green', 'red', 'orange', 'purple', 'pink'])

const handleBack = () => emits('onBack')

const handleSelect = (color: LayoutColor) => layout.switchColor(color)
</script>

<template>
  <MenuHead :title="t.lang.common.header.features.profile.display" @onBack="handleBack" />
  <Paragraph :weight="600">{{ t.lang.common.header.features.profile.theme }}</Paragraph>
  <Space>
    <Button
      v-for="color in colors"
      :color="color"
      rootClassName="w-10 h-10"
      @click="() => handleSelect(color as LayoutColor)"
    ></Button>
  </Space>
</template>
