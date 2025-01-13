<script setup lang="ts" generic="M extends object">
import { defineProps, defineEmits } from 'vue'
import { Card } from '@/components/UI'
import { Form } from '@/components/Control'
import type { FormProps } from '@/components/Control/Form/Form.vue'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface AuthFormLayout extends FormProps<M> {}

const props = defineProps<AuthFormLayout>()

const emits = defineEmits(['onFinish'])

const layout = useLayoutStore()

const handleFinish = (data: M) => emits('onFinish', data)
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
        <slot name="head"></slot>
      </template>
      <template #body>
        <slot name="body"></slot>
      </template>
    </Card>
  </Form>
</template>
