<script setup lang="ts">
import { computed, defineEmits } from 'vue'
import { Space, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { ELang } from '@/common/enum'
import MenuHead from './MenuHead.vue'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLangStore from '@/stores/LangStore'

const emits = defineEmits(['onBack'])

const t = useLangStore()

const items = computed(() => [
  { id: 'en', title: t.lang.common.header.features.profile.english, type: ELang.EN },
  { id: 'vn', title: t.lang.common.header.features.profile.vietnamese, type: ELang.VN }
])

const handleSelect = (lang: ELang) => t.switchLang(lang)

const handleBack = () => emits('onBack')
</script>

<template>
  <MenuHead :title="t.lang.common.header.features.profile.language" @onBack="handleBack" />
  <ItemWrapper v-for="item in items" :key="item.id" @click="() => handleSelect(item.type)">
    <Space aligns="middle">
      <Icon :iconName="iconName.GLOBE" />
      <span>{{ item.title }}</span>
    </Space>
  </ItemWrapper>
</template>
