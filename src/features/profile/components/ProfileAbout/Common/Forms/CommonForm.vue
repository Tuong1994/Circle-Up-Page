<script setup lang="ts">
import { computed, defineProps, ref, withDefaults } from 'vue'
import { Input } from '@/components/Control'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import ControlLayout from './ControlLayout.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

interface EditableTextProps {
  icon?: string
  text?: string
  label?: string
}

const props = withDefaults(defineProps<EditableTextProps>(), {
  text: '',
  label: ''
})

const layout = useLayoutStore()

const editable = ref<boolean>(false)

const openAudiencesModal = ref<boolean>(false)

const showAddAction = computed<boolean>(() => Boolean(!props.text && !editable.value))

const showTextView = computed<boolean>(() => Boolean(props.text && !editable.value))

const handleEditText = () => (editable.value = true)

const handleCancelEdit = () => (editable.value = false)

const handleOpenAudienceModal = () => (openAudiencesModal.value = !openAudiencesModal.value)
</script>

<template>
  <ControlLayout>
    <Input :color="(layout.color as ControlColor)" :shape="(layout.shape as ControlShape)" />
  </ControlLayout>
</template>
