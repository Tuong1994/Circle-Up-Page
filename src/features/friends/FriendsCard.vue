<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { routePaths } from '@/router'
import { Card, Button, Image, Typography } from '@/components/UI'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const layout = useLayoutStore()

const t = useLangStore()
</script>

<template>
  <Card rootClassName="friends-card" hoverable>
    <template #body>
      <RouterLink :to="routePaths.PROFILE">
        <Image rootClassName="card-image" imgWidth="100%" imgHeight="100%" objectFit="cover" />
      </RouterLink>
      <Paragraph :weight="600" :size="16" rootClassName="pt-3">Friend name</Paragraph>
      <Paragraph variant="secondary">{{ t.lang.friends.item.followedBy }} 1k</Paragraph>
      <Button rootClassName="w-full my-5" :shape="layout.shape" :color="layout.color">
        {{ t.lang.friends.item.add }}
      </Button>
      <Button rootClassName="w-full" ghost :shape="layout.shape" :color="layout.color">
        {{ t.lang.common.actions.remove }}
      </Button>
    </template>
  </Card>
</template>
