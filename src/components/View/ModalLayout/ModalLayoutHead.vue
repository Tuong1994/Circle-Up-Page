<script setup lang="ts">
import { withDefaults, defineProps, defineEmits } from 'vue'
import { Grid, Typography, Button, Icon } from '@/components/UI'
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
      <Button v-if="type === 'sub'" shape="round" @click="handleBack">
        <Icon :iconName="iconName.ANGLE_LEFT" :size="16" />
      </Button>
    </Col>
    <Col>
      <Paragraph aligns="center" :weight="600" :size="18">{{ title }}</Paragraph>
    </Col>
    <Col :span="2">
      <Button v-if="type === 'main'" shape="round" @click="handleClose">
        <Icon :iconName="iconName.X_MARK" :size="16" />
      </Button>
    </Col>
  </Row>
</template>
