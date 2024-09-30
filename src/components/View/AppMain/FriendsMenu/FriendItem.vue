<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, computed, toRefs } from 'vue'
import { Grid, Typography, Avatar, Button, Image } from '@/components/UI'
import { routePaths } from '@/router'
import type { ButtonProps } from '@/components/UI/Button/Button.vue'
import ItemWrapper from '../../ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

interface FriendItemProps {
  rootClassName?: string
  hasTime?: boolean;
  confirmButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
}

const props = withDefaults(defineProps<FriendItemProps>(), {
  rootClassName: ''
})

const emits = defineEmits(['onConfirm', 'onCancel'])

const { confirmButtonProps, cancelButtonProps } = toRefs(props)

const layout = useLayoutStore()

const confirmProps = computed<ButtonProps>(() => ({
  ...(confirmButtonProps as object),
  color: layout.color,
  rootClassName: 'w-full'
}))

const cancelProps = computed<ButtonProps>(() => ({
  ...(cancelButtonProps as object),
  rootClassName: 'w-full'
}))

const handleConfirm = () => emits('onConfirm')

const handleCancel = () => emits('onCancel')
</script>

<template>
  <RouterLink :to="routePaths.FRIENDS" :class="rootClassName">
    <ItemWrapper>
      <Row>
        <Col :span="5">
          <Avatar :size="50">
            <slot name="avatar">
              <Image :imgWidth="60" :imgHeight="60" />
            </slot>
          </Avatar>
        </Col>
        <Col :span="19">
          <Row aligns="middle" justify="between">
            <Col>
              <Paragraph :weight="600">
                <slot name="people">People</slot>
              </Paragraph>
            </Col>
            <Col v-if="hasTime">
              <Paragraph variant="secondary" :size="12">35w</Paragraph>
            </Col>
          </Row>
          <Paragraph variant="secondary" :size="12">Followed by 1k</Paragraph>
          <Row>
            <Col :span="12">
              <Button v-bind="confirmProps" @click="handleConfirm">
                <slot name="confirm">Add friend</slot>
              </Button>
            </Col>
            <Col :span="12">
              <Button v-bind="cancelProps" @click="handleCancel">
                <slot name="cancel"> Remove </slot>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </ItemWrapper>
  </RouterLink>
</template>
