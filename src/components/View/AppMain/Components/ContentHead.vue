<script setup lang="ts">
import { watchEffect, withDefaults, defineProps, ref, computed, type StyleValue } from 'vue'
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
  rootClassName?: string
  rootStyle?: StyleValue
  hasSubLink?: boolean
  hasSearch?: boolean
  subLinkTitle?: string
  searchPlaceholder?: string
  backPath?: string
  subLinkPath?: string
}

const props = withDefaults(defineProps<ContentHeadProps>(), {
  rootClassName: '',
  hasSubLink: true,
  backPath: routePaths.FRIENDS,
  subLinkPath: routePaths.FRIENDS
})

const app = useAppMainStore()

const layout = useLayoutStore()

const t = useLangStore()

const contentHeadRef = ref<HTMLDivElement | null>(null)

const controlPlaceholer = computed<string>(
  () => props.searchPlaceholder ?? t.lang.common.form.placeholder.search
)

const subLinkTitle = computed<string>(() => props.subLinkTitle ?? t.lang.friends.sideMenu.friends)

watchEffect(() => {
  const height = contentHeadRef.value?.scrollHeight ?? 0
  app.setHasContentMenuHead(true)
  app.setContentMenuHeadHeight(height)
})
</script>

<template>
  <div ref="contentHeadRef" :style="rootStyle" :class="['side-content-head', rootClassName]">
    <Space aligns="middle">
      <RouterLink :to="backPath">
        <Button shape="round">
          <Icon :iconName="iconName.ANGLE_LEFT" />
        </Button>
      </RouterLink>
      <div>
        <RouterLink v-if="hasSubLink" :to="subLinkPath">
          <Button text sizes="sm" rootClassName="!p-0">
            {{ subLinkTitle }}
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
      :placeholder="controlPlaceholer"
      :shape="(layout.shape as ControlShape)"
      :color="(layout.color as ControlColor)"
    >
      <template #addonBefore>
        <Icon :iconName="iconName.SEARCH" />
      </template>
    </Input>
  </div>
</template>
