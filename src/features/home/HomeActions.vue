<script setup lang="ts">
import { defineEmits } from 'vue'
import { Avatar, Card, Space, Button } from '@/components/UI'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()

const emits = defineEmits(['onClick'])

const handleClick = () => emits('onClick')
</script>

<template>
  <Card rootClassName="home-actions">
    <template #body>
      <Space aligns="middle">
        <Avatar :size="40" />
        <Button shape="round" rootClassName="actions-button" @click="handleClick">
          {{ t.lang.home.actions.placeholder }}?
        </Button>
      </Space>
    </template>
  </Card>
</template>
