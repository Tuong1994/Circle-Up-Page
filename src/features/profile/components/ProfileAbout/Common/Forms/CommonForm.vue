<script setup lang="ts">
import { computed, defineProps, defineEmits, ref, withDefaults, watch } from 'vue'
import { Input } from '@/components/Control'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import type { InputProps } from '@/components/Control/Input/Input.vue'
import type { ButtonProps } from '@/components/UI/Button/Button.vue'
import ControlLayout from './ControlLayout.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

export interface CommonFormProps {
  value?: string
  label?: string
  inputProps?: InputProps
}

const props = withDefaults(defineProps<CommonFormProps>(), {
  value: ''
})

const emits = defineEmits(['onChange', 'onSelectAudience', 'onSave', 'onCancel'])

const layout = useLayoutStore()

const text = ref<string>(props.value)

const inputDefaultProps = computed<InputProps>(() => ({
  ...(props.inputProps as object),
  color: layout.color as ControlColor,
  shape: layout.shape as ControlShape
}))

const saveButtonProps = computed<ButtonProps>(() => ({ disabled: text.value === '' }))

const handleSelectAudience = () => emits('onSelectAudience')

const handleCancelEdit = () => emits('onCancel')

const handleSaveEdit = () => emits('onSave')

watch(text, (newValue) => emits('onChange', newValue))
</script>

<template>
  <ControlLayout
    :saveButtonProps="saveButtonProps"
    @onSelectAudience="handleSelectAudience"
    @onSave="handleSaveEdit"
    @onCancel="handleCancelEdit"
  >
    <Input v-bind="inputDefaultProps" v-model:modelValue="text">
      <template #label>{{ label }}</template>
    </Input>
  </ControlLayout>
</template>
