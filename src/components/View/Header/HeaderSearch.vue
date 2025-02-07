<script setup lang="ts">
import { computed, ref, watch, defineProps } from 'vue'
import { Avatar, Icon, Space, Button, Grid, Typography } from '@/components/UI'
import { Input } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import { useRender, useClickOutside } from '@/hooks'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import Logo from '../Logo/Logo.vue'
import ItemWrapper from './../ItemWrapper/ItemWrapper.vue'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

interface HeaderSearchInputProps {
  responsive?: boolean
}

const props = defineProps<HeaderSearchInputProps>()

const layout = useLayoutStore()

const inputRef = ref<HTMLDivElement>()

const open = ref<boolean>(false)

const t = useLangStore()

const render = useRender(open)

useClickOutside(inputRef, open)

const logoClassName = computed<string>(() => (open.value ? 'input-logo-render' : ''))

const inputClassName = computed<string>(() => (open.value ? 'input-control-active' : ''))

const dropdownClassName = computed<string>(() => (open.value ? 'control-dropdown-active' : ''))

const responsiveClassName = computed<string>(() =>
  props.responsive && open.value ? 'input-control-responsive' : ''
)

const avatarSize = computed<number>(() => (props.responsive ? 30 : 40))

const handleOpen = () => (open.value = true)

const handleClose = () => (open.value = false)

watch(open, (newValue) => {
  if (!props.responsive) return
  if (newValue) document.body.style.overflow = 'hidden'
  else document.body.style.overflow = 'unset'
})
</script>

<template>
  <Space aligns="middle" rootClassName="search-input">
    <Space aligns="middle" :rootClassName="`input-logo ${logoClassName}`">
      <Logo :responsive="responsive" />
      <Avatar v-if="responsive" :color="layout.color" :size="avatarSize" @click="handleOpen">
        <Icon :iconName="iconName.SEARCH" />
      </Avatar>
    </Space>
    <div ref="inputRef" :class="['input-control', responsiveClassName, inputClassName]">
      <Space size="md" aligns="middle">
        <div v-if="open" class="control-back">
          <Icon :size="18" :iconName="iconName.ANGLE_DOUBLE_LEFT" @click="handleClose" />
        </div>
        <Input
          rootClassName="control-box"
          :color="(layout.color as ControlColor)"
          :shape="(layout.shape as ControlShape)"
          :placeholder="t.lang.common.header.searchInput.placeholder"
          @click="handleOpen"
        >
          <template #addonBefore>
            <Icon v-if="!open" :iconName="iconName.SEARCH" />
          </template>
        </Input>
      </Space>
      <div v-if="render" :class="['control-dropdown', dropdownClassName]">
        <Row justify="between" aligns="middle">
          <Col>
            <Paragraph>{{ t.lang.common.header.searchInput.recent }}</Paragraph>
          </Col>
          <Col>
            <Button text>{{ t.lang.common.actions.edit }}</Button>
          </Col>
        </Row>
        <ItemWrapper v-for="item in 10">
          <Row justify="between" aligns="middle">
            <Col>
              <Space>
                <Avatar :color="layout.color" />
                <Paragraph strong>Friend</Paragraph>
              </Space>
            </Col>
            <Col>
              <Icon :iconName="iconName.X_MARK" />
            </Col>
          </Row>
        </ItemWrapper>
      </div>
    </div>
  </Space>
</template>