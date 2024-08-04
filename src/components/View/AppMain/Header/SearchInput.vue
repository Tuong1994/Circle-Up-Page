<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { Avatar, Icon, Space, Button, Grid, Typography } from '@/components/UI'
import { Input } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import { useRender, useViewPoint } from '@/hooks'
import Logo from '../../Logo/Logo.vue'
import Item from './Item.vue'
import useClickOutSide from '@/hooks/useClickOutside'
import useHeaderStore from '../HeaderStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

const { isPhone } = useViewPoint()

const inputRef = ref<HTMLDivElement>()

const open = ref<boolean>(false)

const header = useHeaderStore()

const render = useRender(open)

useClickOutSide(inputRef, open)

const logoClassName = computed<string>(() => (header.openSearch ? 'input-logo-render' : ''))

const inputClassName = computed<string>(() => (open.value ? 'input-control-active' : ''))

const dropdownClassName = computed<string>(() => (open.value ? 'control-dropdown-active' : ''))

const responsiveClassName = computed<string>(() =>
  isPhone.value && open.value ? 'input-control-responsive' : ''
)

const handleOpen = () => (open.value = true)

const handleClose = () => (open.value = false)

watch(open, (newValue) => {
  header.setOpenSearch(newValue)
})
</script>

<template>
  <Space aligns="middle" rootClassName="search-input">
    <Space v-if="!render" aligns="middle" :rootClassName="`input-logo ${logoClassName}`">
      <Logo />
      <Avatar v-if="isPhone" :size="40" @click="handleOpen">
        <Icon :iconName="iconName.SEARCH" />
      </Avatar>
    </Space>
    <div ref="inputRef" :class="['input-control', responsiveClassName, inputClassName]">
      <Space size="md" aligns="middle">
        <div v-if="open" class="control-back">
          <Icon :size="18" :iconName="iconName.ANGLE_DOUBLE_LEFT" @click="handleClose" />
        </div>
        <Input shape="round" color="orange" rootClassName="control-box" @click="handleOpen">
          <template #addonBefore>
            <Icon v-if="!open" :iconName="iconName.SEARCH" />
          </template>
        </Input>
      </Space>
      <div v-if="render" :class="['control-dropdown', dropdownClassName]">
        <Row justify="between" aligns="middle">
          <Col>
            <Paragraph>Recent</Paragraph>
          </Col>
          <Col>
            <Button text>Edit</Button>
          </Col>
        </Row>
        <Item v-for="item in 10">
          <Row justify="between" aligns="middle">
            <Col>
              <Space>
                <Avatar />
                <Paragraph strong>Friend</Paragraph>
              </Space>
            </Col>
            <Col>
              <Icon :iconName="iconName.X_MARK" />
            </Col>
          </Row>
        </Item>
      </div>
    </div>
  </Space>
</template>
