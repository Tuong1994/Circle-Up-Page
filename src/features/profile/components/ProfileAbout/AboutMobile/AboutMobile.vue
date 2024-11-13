<script setup lang="ts">
import { Card, Typography } from '@/components/UI'
import MobileDetail from './MobileDetail.vue'
import useLangStore from '@/stores/LangStore'
import MobileWork from './MobileWork.vue'
import MobileEducation from './MobileEducation.vue'
import MobileLived from './MobileLived.vue'
import MobileRelationship from './MobileRelationship.vue'

const { Paragraph } = Typography

const t = useLangStore()
</script>

<template>
  <Card rootClassName="mb-5">
    <template #body>
      <Paragraph :size="18" :weight="600">
        {{ t.lang.common.routes.profileAbout }}
      </Paragraph>
    </template>
  </Card>
  <MobileDetail />
  <MobileWork />
  <MobileEducation />
  <MobileLived />
  <MobileRelationship />
</template>
