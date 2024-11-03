<script setup lang="ts">
import { Button, Space, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
</script>

<template>
  <Button text>
    <Space aligns="middle">
      <Icon :iconName="iconName.PLUS" />
      <span>Add text</span>
    </Space>
  </Button>
</template>
