<script setup lang="ts">
import { Card, Icon, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import RowContent from '@/components/View/RowContent/RowContent.vue'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()
</script>

<template>
  <Card rootClassName="mb-5">
    <template #head>
      <Paragraph :size="18" :weight="600">
        {{ t.lang.profile.post.intro.title }}
      </Paragraph>
    </template>
    <template #body>
      <RowContent v-for="item in 6">
        <template #label>
          <Icon :iconName="iconName.USER" :size="18" />
        </template>
        <template #content></template>
      </RowContent>
    </template>
  </Card>
</template>
