<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, ref, computed } from 'vue'
import { Input } from '@/components/Control'
import { Divider, Grid, Space, Button } from '@/components/UI'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import type { InputProps } from '@/components/Control/Input/Input.vue'
import AudiencesModal from './AudiencesModal.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useEditableTextStore from './EditableTextStore'

const { Row, Col } = Grid

interface TextControlProps {
  textValue?: string
  inputProps?: InputProps
}

const props = withDefaults(defineProps<TextControlProps>(), {
  textValue: ''
})

const emits = defineEmits(['onChangeText', 'onSelectAudience', 'onSave'])

const layout = useLayoutStore()

const editable = useEditableTextStore()

const text = ref<string>(props.textValue)

const openAudiencesModal = ref<boolean>(false)

const saveButtonDisabled = computed<boolean>(() => text.value === '')

const handleCancelEdit = () => editable.setEditText(false)

const handleOpenAudienceModal = () => (openAudiencesModal.value = !openAudiencesModal.value)
</script>

<template>
  <Input
    v-bind="inputProps"
    v-model:modelValue="text"
    :color="(layout.color as ControlColor)"
    :shape="(layout.shape as ControlShape)"
  />
  <Divider rootClassName="editable-control-divider" />
  <Row justify="between">
    <Col>
      <Button :color="layout.color" :shape="layout.shape" @click="handleOpenAudienceModal">Public</Button>
    </Col>
    <Col>
      <Space>
        <Button :color="layout.color" :shape="layout.shape" ghost @click="handleCancelEdit">Cancel</Button>
        <Button :color="layout.color" :shape="layout.shape" :disabled="saveButtonDisabled">Save</Button>
      </Space>
    </Col>
  </Row>
  <AudiencesModal :open="openAudiencesModal" @onClose="handleOpenAudienceModal" />
</template>
