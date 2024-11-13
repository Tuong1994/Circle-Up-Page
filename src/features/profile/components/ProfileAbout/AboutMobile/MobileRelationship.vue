<script setup lang="ts">
import { Card, Divider, Typography } from '@/components/UI'
import SectionRelationship from '../AboutSection/SectionRelationship.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()
</script>

<template>
  <Card>
    <template #body>
      <Paragraph :weight="600" :size="15">{{ t.lang.profile.about.tabsTitle.relationship }}</Paragraph>
      <Divider />
      <SectionRelationship />
    </template>
  </Card>
</template>
