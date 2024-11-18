<script setup lang="ts">
import { withDefaults, defineProps, ref } from 'vue'
import { Space } from '@/components/UI'
import { EProfileTabType } from '../../enum'
import type { ProfileTabs } from '../../type'

interface ProfileTabsProps {
  defaultTab?: EProfileTabType
  items: ProfileTabs
}

const props = withDefaults(defineProps<ProfileTabsProps>(), {
  defaultTab: EProfileTabType.ALL_FRIENDS
})

const tabSelected = ref<EProfileTabType>(props.defaultTab)

const handleSelectTab = (id: EProfileTabType) => (tabSelected.value = id)
</script>

<template>
  <div class="profile-tabs">
    <Space rootClassName="tabs-titles">
      <div
        v-for="item in items"
        :key="item.id"
        :class="['titles-item', { 'titles-item-selected': tabSelected === item.id }]"
        @click="handleSelectTab(item.id)"
      >
        {{ item.title }}
      </div>
    </Space>
    <div class="tabs-content">
      <slot name="content" :id="tabSelected"></slot>
    </div>
  </div>
</template>
