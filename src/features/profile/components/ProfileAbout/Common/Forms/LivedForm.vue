<script setup lang="ts">
import { withDefaults, defineProps, defineEmits, computed, ref } from 'vue'
import { Select } from '@/components/Control'
import type { ControlColor, ControlShape } from '@/components/Control/type'
import type { ProfileLived } from '@/features/profile/type'
import ControlLayout from './ControlLayout.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

export interface LivedFormProps {
  profileLived?: ProfileLived
}

const props = withDefaults(defineProps<LivedFormProps>(), {
  profileLived: () => ({
    id: '',
    city: '',
    town: ''
  })
})

const emits = defineEmits(['onSelectAudience', 'onSave', 'onCancel'])

const layout = useLayoutStore()

const formData = ref<ProfileLived>(props.profileLived)

const commonProps = computed(() => ({
  rootClassName: 'mb-5',
  color: layout.color as ControlColor,
  shape: layout.shape as ControlShape
}))

const handleSelectCity = (city: any) => (formData.value = { ...formData.value, city })

const handleSelectTown = (town: any) => (formData.value = { ...formData.value, town })

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
    <Select v-bind="commonProps" :defaultValue="formData.city" @onChangeSelect="handleSelectCity">
      <template #label>City</template>
    </Select>
    <Select v-bind="commonProps" :defaultValue="formData.town" @onChangeSelect="handleSelectTown">
      <template #label>Town</template>
    </Select>
  </ControlLayout>
</template>
