<script setup lang="ts">
import { Button, Space, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useEditableTextStore from './EditableTextStore';

const editable = useEditableTextStore();

const handleEditText = () => editable.setEditText(true)
</script>

<template>
  <Button text @click="handleEditText">
    <Space aligns="middle">
      <Icon :iconName="iconName.PLUS" />
      <span>Add text</span>
    </Space>
  </Button>
</template>
