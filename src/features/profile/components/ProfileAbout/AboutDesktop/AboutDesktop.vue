<script setup lang="ts">
import { computed, ref } from 'vue'
import { Card, Typography } from '@/components/UI'
import { EProfileTabType } from '../../../enum'
import type { ProfileTab } from '@/features/profile/type'
import SectionDetail from '../AboutSection/SectionDetail.vue'
import SectionWork from '../AboutSection/SectionWork.vue'
import SectionEducation from '../AboutSection/SectionEducation.vue'
import SectionLived from '../AboutSection/SectionLived.vue'
import SectionRelationship from '../AboutSection/SectionRelationship.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()

const tabsTitlesRef = ref<HTMLDivElement>()

const tabSelected = ref<EProfileTabType>(EProfileTabType.DETAIL)

const items = computed<ProfileTab[]>(() => [
  { id: EProfileTabType.DETAIL, title: t.lang.profile.about.tabsTitle.detail },
  { id: EProfileTabType.WORK, title: t.lang.profile.about.tabsTitle.work },
  { id: EProfileTabType.EDUCATION, title: t.lang.profile.about.tabsTitle.education },
  { id: EProfileTabType.LIVED, title: t.lang.profile.about.tabsTitle.lived },
  { id: EProfileTabType.RELATIONSHIP, title: t.lang.profile.about.tabsTitle.relationship }
])

const getTabsContentWidth = () => {
  if (!tabsTitlesRef.value) return
  const tabsTitlesWidth = tabsTitlesRef.value.clientWidth + 60
  return { width: `calc(100% - (${tabsTitlesWidth}px)` }
}

const handleSelectTab = (id: EProfileTabType) => (tabSelected.value = id)
</script>

<template>
  <Card>
    <template #body>
      <Paragraph rootClassName="mb-5" :size="18" :weight="600">
        {{ t.lang.common.routes.profileAbout }}
      </Paragraph>
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
          <SectionDetail v-if="tabSelected === EProfileTabType.DETAIL" />
          <SectionWork v-if="tabSelected === EProfileTabType.WORK" />
          <SectionEducation v-if="tabSelected === EProfileTabType.EDUCATION" />
          <SectionLived v-if="tabSelected === EProfileTabType.LIVED" />
          <SectionRelationship v-if="tabSelected === EProfileTabType.RELATIONSHIP" />
        </div>
      </div>
    </template>
  </Card>
</template>
