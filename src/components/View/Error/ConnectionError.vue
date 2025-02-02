<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Grid, Typography, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

interface ConnectionErrorProps {
  isError?: boolean
}

defineProps<ConnectionErrorProps>()

const emits = defineEmits(['onClose'])

const t = useLangStore()

const handleClose = () => emits('onClose')
</script>

<template>
  <div v-if="isError" class="connection-error">
    <Row justify="between" aligns="middle">
      <Col>
        <Paragraph>
          {{ t.lang.common.message.error.connection }}
        </Paragraph>
      </Col>
      <Col>
        <Icon rootClassName="error-close" :size="20" :iconName="iconName.X_MARK" @click="handleClose" />
      </Col>
    </Row>
  </div>
</template>
