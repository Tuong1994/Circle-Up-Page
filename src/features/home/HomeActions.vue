<script setup lang="ts">
import { defineEmits } from 'vue'
import { Avatar, Card, Space, Button } from '@/components/UI'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const t = useLangStore()

const layout = useLayoutStore()

const emits = defineEmits(['onClick'])

const handleClick = () => emits('onClick')
</script>

<template>
  <Card rootClassName="home-actions">
    <template #body>
      <Space aligns="middle">
        <Avatar :size="40" :color="layout.color" />
        <Button :shape="layout.shape" :color="layout.color" ghost rootClassName="actions-button" @click="handleClick">
          {{ t.lang.home.actions.placeholder }}?
        </Button>
      </Space>
    </template>
  </Card>
</template>
