<script setup lang="ts">
import { Button, Icon, Space, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

const layout = useLayoutStore()
</script>

<template>
  <div class="banner-upload">
    <div class="upload-image"></div>
    <Button :color="layout.color" rootClassName="upload-action">
      <Space aligns="middle">
        <Icon :iconName="iconName.IMAGE" />
        <Paragraph>Add Cover photo</Paragraph>
      </Space>
    </Button>
  </div>
</template>
