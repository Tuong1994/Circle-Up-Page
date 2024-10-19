<script setup lang="ts">
import { Button, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()
</script>

<template>
  <div class="image-avatar">
    <div class="avatar-wrap">
      <div class="wrap-image"></div>
      <Button :color="layout.color" shape="round" rootClassName="wrap-action">
        <Icon :iconName="iconName.IMAGE" />
      </Button>
    </div>
  </div>
</template>
