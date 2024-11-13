<script setup lang="ts">
import { computed, ref } from 'vue'
import { Card, Typography } from '@/components/UI'
import { EAboutTabType } from '../../../enum'
import SectionDetail from '../AboutSection/SectionDetail.vue'
import SectionWork from '../AboutSection/SectionWork.vue'
import SectionEducation from '../AboutSection/SectionEducation.vue'
import SectionLived from '../AboutSection/SectionLived.vue'
import SectionRelationship from '../AboutSection/SectionRelationship.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()

const tabsTitlesRef = ref<HTMLDivElement>()

const tabSelected = ref<EAboutTabType>(EAboutTabType.DETAIL)

const items = computed(() => [
  { id: EAboutTabType.DETAIL, title: t.lang.profile.about.tabsTitle.detail },
  { id: EAboutTabType.WORK, title: t.lang.profile.about.tabsTitle.work },
  { id: EAboutTabType.EDUCATION, title: t.lang.profile.about.tabsTitle.education },
  { id: EAboutTabType.LIVED, title: t.lang.profile.about.tabsTitle.lived },
  { id: EAboutTabType.RELATIONSHIP, title: t.lang.profile.about.tabsTitle.relationship }
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
          <SectionDetail v-if="tabSelected === EAboutTabType.DETAIL" />
          <SectionWork v-if="tabSelected === EAboutTabType.WORK" />
          <SectionEducation v-if="tabSelected === EAboutTabType.EDUCATION" />
          <SectionLived v-if="tabSelected === EAboutTabType.LIVED" />
          <SectionRelationship v-if="tabSelected === EAboutTabType.RELATIONSHIP" />
        </div>
      </div>
    </template>
  </Card>
</template>
