<script setup lang="ts">
import { computed, defineEmits } from 'vue'
import { RouterLink } from 'vue-router'
import { Button, Icon, Space } from '@/components/UI'
import { routePaths } from '@/router'
import { iconName } from '@/components/UI/Icon/constant'
import { useViewPoint } from '@/hooks'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { isPhone, isTablet, isLgTablet } = useViewPoint()

const layout = useLayoutStore()

const emits = defineEmits(['onOpen'])

const responsive = computed<boolean>(() => isPhone.value || isTablet.value || isLgTablet.value)

const handleOpen = () => emits('onOpen')
</script>

<template>
  <div class="carousel-header">
    <Space aligns="middle">
      <Button v-if="responsive" :color="layout.color" :shape="layout.shape" @click="handleOpen">
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
