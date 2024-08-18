<script setup lang="ts">
import { computed, ref, withDefaults, defineProps, type StyleValue } from 'vue'
import { useDetectBottom, useRender, useViewPoint } from '@/hooks'
import { Grid, UList, Space, Button, Icon, Avatar, Divider, Dropdown } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'

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

const show = ref<boolean>(false)

const elRef = ref<HTMLDivElement>()

const render = useRender(show)

const bottom = useDetectBottom(elRef)

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
          <Button>Visit group</Button>
        </Col>
        <Col>
          <Button>Message</Button>
        </Col>
        <Col>
          <Button>Like</Button>
        </Col>
        <Col>
          <Dropdown placement="right">
            <template #label>
              <Button>
                <Icon :iconName="iconName.ELLIPSIS_H" />
              </Button>
            </template>
            <template #dropdown> Setting </template>
          </Dropdown>
        </Col>
      </Row>
    </div>
  </div>
</template>
