<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, computed } from 'vue'
import { Grid, Typography, Icon, Space, Button, Tooltip } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import RowContent from '@/components/View/RowContent/RowContent.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useAuthStore from '@/stores/AuthStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

interface TextViewProps {
  icon?: string
  text?: string
  label?: string
  subText?: string
}

const props = withDefaults(defineProps<TextViewProps>(), {
  icon: iconName.BOOKMARK
})

const emits = defineEmits(['onEdit', 'onSelectAudience'])

const layout = useLayoutStore()

const auth = useAuthStore()

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
          <Paragraph :lineHeight="18" :size="15">{{ text }}</Paragraph>
          <Paragraph v-if="subText" :size="13" variant="secondary">{{ subText }}</Paragraph>
          <Paragraph v-if="label" :size="13" variant="secondary" :lineHeight="30">{{ label }}</Paragraph>
        </template>
      </RowContent>
    </Col>
    <Col v-if="auth.isAuth">
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
