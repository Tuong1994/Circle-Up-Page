<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import { Grid, Typography, Icon, Button } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import RowContent from '../RowContent/RowContent.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useEditableTextStore from './EditableTextStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

interface TextViewProps {
  icon?: string
  text?: string
  subText?: string
}

withDefaults(defineProps<TextViewProps>(), {
  icon: iconName.BOOKMARK,
  text: 'Editable text',
  subText: 'Label'
})

const layout = useLayoutStore()

const editable = useEditableTextStore()

const handleEditText = () => editable.setEditText(true)
</script>

<template>
  <Row aligns="middle" justify="between">
    <Col>
      <RowContent :gridRowProps="{ aligns: 'top' }">
        <template #label>
          <Icon v-if="icon" :iconName="icon" />
        </template>
        <template #content>
          <span>{{ text }}</span>
          <Paragraph :size="12" variant="secondary">{{ subText }}</Paragraph>
        </template>
      </RowContent>
    </Col>
    <Col>
      <Button :color="layout.color" :shape="layout.shape" ghost @click="handleEditText">
        <Icon :iconName="iconName.PENCIL_ALT" />
      </Button>
    </Col>
  </Row>
</template>
