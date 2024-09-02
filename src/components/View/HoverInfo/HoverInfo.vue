<script setup lang="ts">
import { computed, ref, withDefaults, defineProps, type StyleValue } from 'vue'
import { useDetectBottom, useRender, useViewPoint } from '@/hooks'
import { Grid, UList, Space, Button, Icon, Avatar, Divider, Dropdown } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLangStore from '@/stores/LangStore'
import ItemWrapper from '../ItemWrapper/ItemWrapper.vue'

const { Row, Col } = Grid

const { List, ListItem } = UList

type ContentPlacement = 'left' | 'right'

interface HoverInfoProps {
  rootClassName?: string
  contentClassName?: string
  rootStyle?: StyleValue
  contentStyle?: StyleValue
  placement?: ContentPlacement
}

const props = withDefaults(defineProps<HoverInfoProps>(), {
  rootClassName: '',
  contentClassName: '',
  placement: 'left'
})

const { isPhone, isTablet } = useViewPoint()

const t = useLangStore()

const show = ref<boolean>(false)

const elRef = ref<HTMLDivElement>()

const render = useRender(show)

const bottom = useDetectBottom(elRef)

const settings = computed(() => [
  { id: 'report', title: t.lang.common.hoverInfo.report, iconName: iconName.CIRCLE_EXCLAMATION },
  { id: 'block', title: t.lang.common.hoverInfo.block, iconName: iconName.LOCK },
  { id: 'follow', title: t.lang.common.hoverInfo.follow, iconName: iconName.PLUS },
  { id: 'invite', title: t.lang.common.hoverInfo.invite, iconName: iconName.PLUS }
])

const hasContent = computed<boolean>(() => !Boolean(isPhone.value || isTablet.value) && render.value)

const activeClassName = computed<string>(() => (show.value ? 'hover-info-content-active' : ''))

const bottomClassName = computed<string>(() => (bottom.value ? 'hover-info-content-bottom' : ''))

const placementClassName = computed<string>(() => `hover-info-content-${props.placement}`)

const handleMouseEnter = () => (show.value = true)

const handleMouseLeave = () => (show.value = false)
</script>

<template>
  <div
    ref="elRef"
    :class="['hover-info', rootClassName]"
    :style="rootStyle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot name="label"></slot>
    <div
      v-if="hasContent"
      :style="contentStyle"
      :class="['hover-info-content', placementClassName, bottomClassName, activeClassName, contentClassName]"
    >
      <Space size="md">
        <Avatar :size="60" />
        <List>
          <template #head> Head </template>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 1</ListItem>
        </List>
      </Space>
      <Divider />
      <Row aligns="middle">
        <Col>
          <Button>{{ t.lang.common.hoverInfo.visit }}</Button>
        </Col>
        <Col>
          <Button>{{ t.lang.common.hoverInfo.message }}</Button>
        </Col>
        <Col>
          <Button>{{ t.lang.common.hoverInfo.like }}</Button>
        </Col>
        <Col>
          <Dropdown placement="right">
            <template #label>
              <Button>
                <Icon :iconName="iconName.ELLIPSIS_H" />
              </Button>
            </template>
            <template #dropdown>
              <div class="p-2">
                <ItemWrapper v-for="setting in settings" :key="setting.id">
                  <Space aligns="middle">
                    <Icon :iconName="setting.iconName" />
                    <span>{{ setting.title }}</span>
                  </Space>
                </ItemWrapper>
              </div>
            </template>
          </Dropdown>
        </Col>
      </Row>
    </div>
  </div>
</template>
