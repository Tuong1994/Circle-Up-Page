<script setup lang="ts">
import { Card, Divider, Typography } from '@/components/UI'
import SectionLived from '../AboutSection/SectionLived.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()
</script>

<template>
  <Card rootClassName="mb-5">
    <template #body>
      <Paragraph :weight="600" :size="15">{{ t.lang.profile.about.tabsTitle.lived }}</Paragraph>
      <Divider />
      <SectionLived />
    </template>
  </Card>
</template>
