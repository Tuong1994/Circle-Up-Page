<script setup lang="ts">
import { computed, defineEmits } from 'vue'
import { Space, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { ELang } from '@/common/enum'
import type { FeatureLangItem, FeatureLangItems } from '../../type'
import MenuHead from './MenuHead.vue'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLangStore from '@/stores/LangStore'

const emits = defineEmits(['onBack'])

const t = useLangStore()

const items = computed<FeatureLangItems>(() => [
  { id: 'en', title: t.lang.common.header.features.profile.english, type: ELang.EN },
  { id: 'vn', title: t.lang.common.header.features.profile.vietnamese, type: ELang.VN }
])

const getSelectedClassName = (item: FeatureLangItem) =>
  item.type === t.locale ? 'my-3 profile-lang-selected' : 'my-3'

const handleSelect = (lang: ELang) => t.switchLang(lang)

const handleBack = () => emits('onBack')
</script>

<template>
  <div class="p-5">
    <MenuHead :title="t.lang.common.header.features.profile.language" @onBack="handleBack" />
    <ItemWrapper
      v-for="item in items"
      :key="item.id"
      :rootClassName="getSelectedClassName(item)"
      @click="() => handleSelect(item.type)"
    >
      <Space aligns="middle">
        <Icon :iconName="iconName.GLOBE" />
        <span>{{ item.title }}</span>
      </Space>
    </ItemWrapper>
  </div>
</template>
