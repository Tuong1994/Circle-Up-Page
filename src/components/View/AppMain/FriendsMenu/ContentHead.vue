<script setup lang="ts">
import { Space, Button, Icon, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { routePaths } from '@/router'

const { Paragraph } = Typography
</script>

<template>
  <Space aligns="middle">
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
