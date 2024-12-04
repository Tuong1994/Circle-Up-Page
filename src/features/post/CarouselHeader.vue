<script setup lang="ts">
import { defineEmits } from 'vue'
import { RouterLink } from 'vue-router'
import { Button, Icon, Space } from '@/components/UI'
import { routePaths } from '@/router'
import { iconName } from '@/components/UI/Icon/constant'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()

const emits = defineEmits(['onOpen'])

const handleOpen = () => emits('onOpen')
</script>

<template>
  <div class="carousel-header">
    <Space aligns="middle">
      <Button :color="layout.color" :shape="layout.shape" @click="handleOpen">
        <Icon :iconName="iconName.ELLIPSIS_H" />
      </Button>
      <RouterLink :to="routePaths.HOME">
        <Button :color="layout.color" :shape="layout.shape">
          <Icon :iconName="iconName.X_MARK" />
        </Button>
      </RouterLink>
    </Space>
  </div>
</template>
