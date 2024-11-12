<script setup lang="ts">
import { computed, defineProps, defineEmits, ref, withDefaults } from 'vue'
import { Select } from '@/components/Control'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import type { SelectProps } from '@/components/Control/Select/Select.vue'
import type { ProfileRelationship } from '@/features/profile/type'
import ControlLayout from './ControlLayout.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

export interface RelationshipProps {
  profileRelationship?: ProfileRelationship
}

const props = withDefaults(defineProps<RelationshipProps>(), {
  profileRelationship: () => ({
    id: '',
    relationship: ''
  })
})

const emits = defineEmits(['onSelectAudience', 'onSave', 'onCancel'])

const layout = useLayoutStore()

const t = useLangStore()

const formData = ref<ProfileRelationship>(props.profileRelationship)

const selectDefaultProps = computed<SelectProps>(() => ({
  color: layout.color as ControlColor,
  shape: layout.shape as ControlShape,
  defaultValue: formData.value.relationship
}))

const handleSelect = (relationship: string) => (formData.value = { ...formData.value, relationship })

const handleSelectAudience = () => emits('onSelectAudience')

const handleCancelEdit = () => emits('onCancel')

const handleSaveEdit = () => emits('onSave')
</script>

<template>
  <ControlLayout
    @onSelectAudience="handleSelectAudience"
    @onSave="handleSaveEdit"
    @onCancel="handleCancelEdit"
  >
    <Select v-bind="selectDefaultProps" @onChangeSelect="handleSelect">
      <template #label>
        {{ t.lang.common.form.label.relationship }}
      </template>
    </Select>
  </ControlLayout>
</template>
