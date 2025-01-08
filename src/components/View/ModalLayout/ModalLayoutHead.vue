<script setup lang="ts">
import { withDefaults, defineProps, defineEmits } from 'vue'
import { Grid, Typography, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'

const { Row, Col } = Grid

const { Paragraph } = Typography

type ModalHeadType = 'main' | 'sub'

interface PostModalHeadProps {
  title?: string
  type?: ModalHeadType
  rootClassName?: string
}

withDefaults(defineProps<PostModalHeadProps>(), {
  rootClassName: '',
  type: 'main'
})

const emits = defineEmits(['onBack', 'onClose'])

const handleBack = () => emits('onBack')

const handleClose = () => emits('onClose')
</script>

<template>
  <Row justify="between" aligns="middle" :rootClassName="`modal-layout-head ${rootClassName}`">
    <Col :span="2">
      <Icon
        v-if="type === 'sub'"
        :size="18"
        :iconName="iconName.ANGLE_LEFT"
        class="cursor-pointer"
        @click="handleBack"
      />
    </Col>
    <Col>
      <Paragraph aligns="center" :weight="600" :size="18">{{ title }}</Paragraph>
    </Col>
    <Col :span="2">
      <Icon
        v-if="type === 'main'"
        :size="18"
        :iconName="iconName.X_MARK"
        class="cursor-pointer"
        @click="handleClose"
      />
    </Col>
  </Row>
</template>
