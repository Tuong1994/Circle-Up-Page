<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Divider, Grid, Space, Button, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import type { ButtonProps } from '@/components/UI/Button/Button.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

interface TextControlProps {
  saveButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
}

defineProps<TextControlProps>()

const emits = defineEmits(['onSelectAudience', 'onSave', 'onCancel'])

const layout = useLayoutStore()

const t = useLangStore()

const handleSelectAudience = () => emits('onSelectAudience')

const handleCancelEdit = () => emits('onCancel')

const handleSaveEdit = () => emits('onSave')
</script>

<template>
  <slot></slot>
  <Divider rootClassName="control-layout-divider" />
  <Row justify="between">
    <Col>
      <Button :color="layout.color" :shape="layout.shape" @click="handleSelectAudience">
        <Space aligns="middle">
          <Icon :iconName="iconName.GLOBE" />
          <span>
            {{ t.lang.home.modal.common.public }}
          </span>
        </Space>
      </Button>
    </Col>
    <Col>
      <Space>
        <Button
          v-bind="cancelButtonProps"
          :color="layout.color"
          :shape="layout.shape"
          ghost
          @click="handleCancelEdit"
        >
          {{ t.lang.common.actions.cancel }}
        </Button>
        <Button v-bind="saveButtonProps" :color="layout.color" :shape="layout.shape" @click="handleSaveEdit">
          {{ t.lang.common.actions.save }}
        </Button>
      </Space>
    </Col>
  </Row>
</template>
