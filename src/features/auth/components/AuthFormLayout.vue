<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Card, Typography } from '@/components/UI'
import { Form } from '@/components/Control'
import type { FormProps } from '@/components/Control/Form/Form.vue'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

interface AuthFormLayout<M extends object> extends FormProps<M> {
  title?: string
}

const props = defineProps<AuthFormLayout<any>>()

const emits = defineEmits(['onFinish'])

const layout = useLayoutStore()

const handleFinish = (data: any) => emits('onFinish', data)
</script>

<template>
  <Form
    v-bind="props"
    :color="(layout.color as ControlColor)"
    :shape="(layout.shape as ControlShape)"
    @onFinish="handleFinish"
  >
    <Card>
      <template #head>
        <Paragraph :weight="600" :size="20">
          {{ title }}
        </Paragraph>
      </template>
      <template #body>
        <slot name="body"></slot>
      </template>
    </Card>
  </Form>
</template>
