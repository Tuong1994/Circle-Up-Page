<script setup lang="ts">
import { watchEffect } from 'vue'
import { Space, Button, Icon, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { routePaths } from '@/router'
import useAppMainStore from '../AppMainStore'

const { Paragraph } = Typography

const app = useAppMainStore()

watchEffect(() => app.setHasContentMenuHead(true))
</script>

<template>
  <Space aligns="middle" rootClassName="side-content-head">
    <RouterLink :to="routePaths.FRIENDS">
      <Button shape="round">
        <Icon :iconName="iconName.ANGLE_LEFT" />
      </Button>
    </RouterLink>
    <div>
      <RouterLink :to="routePaths.FRIENDS">
        <Button text sizes="sm" rootClassName="!p-0">Friends</Button>
      </RouterLink>
      <Paragraph :size="20" :weight="600">
        <slot>Title</slot>
      </Paragraph>
    </div>
  </Space>
</template>
