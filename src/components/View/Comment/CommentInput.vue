<script setup lang="ts">
import { Avatar, Space, Icon, Tooltip, Dropdown } from '@/components/UI'
import { Input } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
</script>

<template>
  <Space>
    <Avatar />
    <div>
      <div>
        <Input />
      </div>
      <Space>
        <Dropdown isBottom placement="right">
          <template #label>
            <Tooltip placement="top">
              <template #title>
                <Icon :iconName="iconName.USER" />
              </template>
              <template #content>Description</template>
            </Tooltip>
          </template>
          <template #dropdown> Content </template>
        </Dropdown>
      </Space>
    </div>
  </Space>
</template>
