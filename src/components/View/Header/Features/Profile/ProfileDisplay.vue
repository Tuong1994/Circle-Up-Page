<script setup lang="ts">
import { computed, defineEmits } from 'vue'
import { Button, Icon, Space, Typography } from '@/components/UI'
import { Select } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import type { ControlColor, ControlShape, SelectOptions } from '@/components/Control/type'
import MenuHead from './MenuHead.vue'
import useLangStore from '@/stores/LangStore'
import useLayoutStore, { type LayoutColor, type LayoutTheme } from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

const emits = defineEmits(['onBack'])

const t = useLangStore()

const layout = useLayoutStore()

const colors = computed<LayoutColor[]>(() => ['blue', 'green', 'red', 'orange', 'purple', 'pink'])

const modeOption = computed<SelectOptions>(() => [
  { label: t.lang.common.header.features.profile.mode.dark, value: 'dark' },
  { label: t.lang.common.header.features.profile.mode.light, value: 'light' }
])

const modeIcon = computed<string>(() => (layout.theme === 'dark' ? iconName.MOON : iconName.LIGHTBULB))

const handleBack = () => emits('onBack')

const handleSelectTheme = (color: LayoutColor) => layout.switchColor(color)

const handleSelectMode = (value: LayoutTheme) => layout.switchTheme(value)
</script>

<template>
  <div class="p-5">
    <MenuHead :title="t.lang.common.header.features.profile.display" @onBack="handleBack" />
    <Paragraph rootClassName="mb-5" :weight="600">
      {{ t.lang.common.header.features.profile.theme }}
    </Paragraph>
    <Space>
      <Button
        v-for="color in colors"
        :color="color"
        rootClassName="w-10 h-10"
        @click="() => handleSelectTheme(color as LayoutColor)"
      />
    </Space>
    <Paragraph rootClassName="my-5" :weight="600">
      {{ t.lang.common.header.features.profile.mode.title }}
    </Paragraph>
    <Select
      :hasSearch="false"
      :hasClear="false"
      :shape="layout.shape as ControlShape"
      :color="layout.color as ControlColor"
      :options="modeOption"
      :defaultValue="layout.theme"
      @onChangeSelect="handleSelectMode"
    >
      <template #addonBefore>
        <Icon :iconName="modeIcon" />
      </template>
    </Select>
  </div>
</template>
