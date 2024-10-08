<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, computed, toRefs } from 'vue'
import { Grid, Typography, Avatar, Button, Image } from '@/components/UI'
import { routePaths } from '@/router'
import type { ButtonProps } from '@/components/UI/Button/Button.vue'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useViewPoint, { breakpoint } from '@/hooks/useViewPoint'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

interface FriendItemProps {
  rootClassName?: string
  hasTime?: boolean
  confirmButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
}

const props = withDefaults(defineProps<FriendItemProps>(), {
  rootClassName: ''
})

const emits = defineEmits(['onConfirm', 'onCancel'])

const { confirmButtonProps, cancelButtonProps } = toRefs(props)

const { MD_PHONE, SM_TABLET, MD_TABLET, LAPTOP } = breakpoint

const { screenWidth } = useViewPoint()

const layout = useLayoutStore()

const t = useLangStore()

const isPhone = computed<boolean>(() => screenWidth.value >= MD_PHONE && screenWidth.value <= SM_TABLET)

const isTablet = computed<boolean>(() => screenWidth.value >= MD_TABLET && screenWidth.value <= LAPTOP)

const confirmProps = computed<ButtonProps>(() => ({
  ...(confirmButtonProps as object),
  color: layout.color,
  rootClassName: 'w-full',
  sizes: 'sm'
}))

const cancelProps = computed<ButtonProps>(() => ({
  ...(cancelButtonProps as object),
  rootClassName: 'w-full',
  sizes: 'sm'
}))

const avatarSize = computed<number>(() => {
  if (isPhone.value) return 80
  if (isTablet.value) return 40
  return 50
})

const handleConfirm = () => emits('onConfirm')

const handleCancel = () => emits('onCancel')
</script>

<template>
  <RouterLink :to="routePaths.FRIENDS_PROFILE" :class="rootClassName">
    <ItemWrapper>
      <Row justify="between">
        <Col :xs="5" :md="4" :span="5">
          <Avatar :size="avatarSize">
            <slot name="avatar">
              <Image :imgWidth="avatarSize" :imgHeight="avatarSize" />
            </slot>
          </Avatar>
        </Col>
        <Col :xs="19" :md="20" :span="19">
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
          <Paragraph variant="secondary" :size="12">{{ t.lang.friends.item.followedBy }} 1k</Paragraph>
          <Row>
            <Col :xs="12" :md="12" :span="12">
              <Button v-bind="confirmProps" @click="handleConfirm">
                <slot name="confirm">{{ t.lang.friends.item.add }}</slot>
              </Button>
            </Col>
            <Col :xs="12" :md="12" :span="12">
              <Button v-bind="cancelProps" @click="handleCancel">
                <slot name="cancel">{{ t.lang.common.actions.remove }}</slot>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </ItemWrapper>
  </RouterLink>
</template>
