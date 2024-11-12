<script setup lang="ts">
import { withDefaults, defineProps, defineEmits, computed, ref } from 'vue'
import { Select } from '@/components/Control'
import type { ControlColor, ControlShape } from '@/components/Control/type'
import type { ProfileLived } from '@/features/profile/type'
import type { SelectProps } from '@/components/Control/Select/Select.vue'
import ControlLayout from './ControlLayout.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

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

const t = useLangStore()

const formData = ref<ProfileLived>(props.profileLived)

const commonProps = computed<SelectProps>(() => ({
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
      <template #label>
        {{ t.lang.common.form.label.city }}
      </template>
    </Select>
    <Select v-bind="commonProps" :defaultValue="formData.town" @onChangeSelect="handleSelectTown">
      <template #label>
        {{ t.lang.common.form.label.district }}
      </template>
    </Select>
  </ControlLayout>
</template>
