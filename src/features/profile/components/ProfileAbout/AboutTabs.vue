<script setup lang="ts">
import { computed, ref } from 'vue'
import { Card, Typography } from '@/components/UI'
import { EAboutTabType } from '../../enum'
import TabsDetail from './TabsDetail.vue'
import TabsWork from './TabsWork.vue'
import TabsEducation from './TabsEducation.vue'
import TabsLived from './TabsLived.vue'
import TabsRelationship from './TabsRelationship.vue'

const { Paragraph } = Typography

const tabsTitlesRef = ref<HTMLDivElement>()

const tabSelected = ref<EAboutTabType>(EAboutTabType.DETAIL)

const items = computed(() => [
  { id: EAboutTabType.DETAIL, title: 'Details about you' },
  { id: EAboutTabType.WORK, title: 'Work' },
  { id: EAboutTabType.EDUCATION, title: 'Education' },
  { id: EAboutTabType.LIVED, title: 'Places lived' },
  { id: EAboutTabType.RELATIONSHIP, title: 'Family and relationship' }
])

const getTabsContentWidth = () => {
  if (!tabsTitlesRef.value) return
  const tabsTitlesWidth = tabsTitlesRef.value.clientWidth + 60
  return { width: `calc(100% - (${tabsTitlesWidth}px)` }
}

const handleSelectTab = (id: EAboutTabType) => (tabSelected.value = id)
</script>

<template>
  <Card>
    <template #body>
      <Paragraph rootClassName="mb-5" :size="18" :weight="600">About</Paragraph>
      <div class="about-tabs">
        <div ref="tabsTitlesRef" class="tabs-titles">
          <div
            v-for="item in items"
            :key="item.id"
            :class="['titles-item', { 'titles-item-selected': tabSelected === item.id }]"
            @click="() => handleSelectTab(item.id)"
          >
            {{ item.title }}
          </div>
        </div>
        <div class="tabs-divider" />
        <div :style="getTabsContentWidth()" class="tabs-content">
          <TabsDetail v-if="tabSelected === EAboutTabType.DETAIL" />
          <TabsWork v-if="tabSelected === EAboutTabType.WORK" />
          <TabsEducation v-if="tabSelected === EAboutTabType.EDUCATION" />
          <TabsLived v-if="tabSelected === EAboutTabType.LIVED" />
          <TabsRelationship v-if="tabSelected === EAboutTabType.RELATIONSHIP" />
        </div>
      </div>
    </template>
  </Card>
</template>
