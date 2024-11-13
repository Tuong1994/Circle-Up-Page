<script setup lang="ts">
import { Card, Divider, Typography } from '@/components/UI'
import SectionDetail from '../AboutSection/SectionDetail.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()
</script>

<template>
  <Card rootClassName="mb-5">
    <template #body>
      <Paragraph :weight="600" :size="15">{{ t.lang.profile.about.tabsTitle.detail }}</Paragraph>
      <Divider />
      <SectionDetail />
    </template>
  </Card>
</template>
