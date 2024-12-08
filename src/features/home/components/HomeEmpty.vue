<script setup lang="ts">
import { Typography, Button, Space } from '@/components/UI'
import { RouterLink } from 'vue-router'
import { routePaths } from '@/router'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const t = useLangStore()

const layout = useLayoutStore()
</script>

<template>
  <Paragraph rootClassName="mb-5" aligns="center" :size="16">
    {{ t.lang.home.empty.message }}
  </Paragraph>
  <Space justify="center">
    <RouterLink :to="routePaths.FRIENDS">
      <Button :color="layout.color">
        {{ t.lang.home.empty.action }}
      </Button>
    </RouterLink>
  </Space>
</template>
