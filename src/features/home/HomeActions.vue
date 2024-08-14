<script setup lang="ts">
import { Avatar, Card, Space, Button } from '@/components/UI'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <Card rootClassName="home-actions">
    <template #body>
      <Space aligns="middle">
        <Avatar :size="40" />
        <Button shape="round" rootClassName="actions-button"> {{ t.lang.home.actions.placeholder }}? </Button>
      </Space>
    </template>
  </Card>
</template>
