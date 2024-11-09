<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue'
import { Grid, Typography, Icon, Space, Button, Tooltip } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import RowContent from '@/components/View/RowContent/RowContent.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

interface TextViewProps {
  icon?: string
  text?: string
  label?: string
  subText?: string
}

withDefaults(defineProps<TextViewProps>(), {
  icon: iconName.BOOKMARK,
  text: 'Editable text',
  label: '',
  subText: ''
})

const emits = defineEmits(['onEdit', 'onSelectAudience'])

const layout = useLayoutStore()

const handleEditText = () => emits('onEdit')

const handleSelectAudience = () => emits('onSelectAudience')
</script>

<template>
  <Row aligns="middle" justify="between">
    <Col>
      <RowContent :gridRowProps="{ aligns: 'top' }">
        <template #label>
          <Icon v-if="icon" :size="18" :iconName="icon" />
        </template>
        <template #content>
          <Paragraph :lineHeight="18">{{ text }}</Paragraph>
          <Paragraph v-if="subText" :size="12" variant="secondary" :lineHeight="18">{{ subText }}</Paragraph>
          <Paragraph v-if="label" :size="12" variant="secondary" :lineHeight="30">{{ label }}</Paragraph>
        </template>
      </RowContent>
    </Col>
    <Col>
      <Space aligns="middle">
        <Tooltip>
          <template #title>
            <Button :color="layout.color" :shape="layout.shape" ghost @click="handleSelectAudience">
              <Icon :iconName="iconName.GLOBE" />
            </Button>
          </template>
          <template #content>Public</template>
        </Tooltip>
        <Tooltip>
          <template #title>
            <Button :color="layout.color" :shape="layout.shape" @click="handleEditText">
              <Icon :iconName="iconName.PENCIL_ALT" />
            </Button>
          </template>
          <template #content>Edit</template>
        </Tooltip>
      </Space>
    </Col>
  </Row>
</template>
