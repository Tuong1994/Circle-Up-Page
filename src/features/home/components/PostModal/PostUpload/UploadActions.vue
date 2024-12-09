<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Grid, Button, Space, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

interface UploadActionsProps {
  isRenderGrid: boolean
}

defineProps<UploadActionsProps>()

const emits = defineEmits(['onAdd', 'onClose'])

const t = useLangStore()

const layout = useLayoutStore()

const handleAdd = () => emits('onAdd')

const handleClose = () => emits('onClose')
</script>

<template>
  <Row rootClassName="upload-actions" aligns="middle" justify="between">
    <Col>
      <Button v-if="isRenderGrid" :color="layout.color" :shape="layout.shape" @click="handleAdd">
        <Space aligns="middle">
          <Icon :iconName="iconName.PLUS" />
          <span>{{ t.lang.home.modal.createPost.upload.add }}</span>
        </Space>
      </Button>
    </Col>
    <Col>
      <Button :color="layout.color" :shape="layout.shape" @click="handleClose">
        <Icon :iconName="iconName.X_MARK" />
      </Button>
    </Col>
  </Row>
</template>
