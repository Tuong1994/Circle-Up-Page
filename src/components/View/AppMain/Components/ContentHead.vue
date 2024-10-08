<script setup lang="ts">
import { watchEffect, withDefaults, defineProps, ref } from 'vue'
import { Space, Button, Icon, Typography } from '@/components/UI'
import { Input } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import { routePaths } from '@/router'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import useAppMainStore from '../AppMainStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

interface ContentHeadProps {
  hasSearch?: boolean
  placeholder?: string
}

withDefaults(defineProps<ContentHeadProps>(), {
  placeholder: 'Search'
})

const app = useAppMainStore()

const layout = useLayoutStore()

const t = useLangStore()

const contentHeadRef = ref<HTMLDivElement | null>(null)

watchEffect(() => {
  const height = contentHeadRef.value?.scrollHeight ?? 0
  app.setHasContentMenuHead(true)
  app.setContentMenuHeadHeight(height)
})
</script>

<template>
  <div ref="contentHeadRef" class="side-content-head">
    <Space aligns="middle">
      <RouterLink :to="routePaths.FRIENDS">
        <Button shape="round">
          <Icon :iconName="iconName.ANGLE_LEFT" />
        </Button>
      </RouterLink>
      <div>
        <RouterLink :to="routePaths.FRIENDS">
          <Button text sizes="sm" rootClassName="!p-0">
            {{ t.lang.friends.sideMenu.friends }}
          </Button>
        </RouterLink>
        <Paragraph :size="20" :weight="600">
          <slot>Title</slot>
        </Paragraph>
      </div>
    </Space>
    <Input
      v-if="hasSearch"
      rootClassName="mt-5"
      :placeholder="placeholder"
      :shape="(layout.shape as ControlShape)"
      :color="(layout.color as ControlColor)"
    >
      <template #addonBefore>
        <Icon :iconName="iconName.SEARCH" />
      </template>
    </Input>
  </div>
</template>
