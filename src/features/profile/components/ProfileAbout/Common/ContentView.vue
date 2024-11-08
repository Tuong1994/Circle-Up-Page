<script setup lang="ts">
import { computed, defineProps, ref, withDefaults } from 'vue'
import { EAboutTabFormType } from '@/features/profile/enum'
import type { AboutTabFormType } from '@/features/profile/type'
import AddAction from './AddAction.vue'
import CommonForm from './Forms/CommonForm.vue'
import ContentItem from './ContentItem.vue'
import PhoneForm from './Forms/PhoneForm.vue'
import GenderForm from './Forms/GenderForm.vue'
import BirthdayForm from './Forms/BirthdayForm.vue'
import useProfileStore from '@/features/profile/store/useProfileStore'
import WorkForm from './Forms/WorkForm.vue'

interface ContentWrapperProps {
  text?: string
  label?: string
  icon?: string
  addActionTitle?: string
  formType?: AboutTabFormType
}

const props = withDefaults(defineProps<ContentWrapperProps>(), {
  text: '',
  formType: EAboutTabFormType.COMMON
})

const profile = useProfileStore()

const editable = ref<boolean>(false)

const showAddAction = computed<boolean>(() => Boolean(!props.text && !editable.value))

const showContentItem = computed<boolean>(() => Boolean(props.text && !editable.value))

const handleEditText = () => (editable.value = true)

const handleCancelEdit = () => (editable.value = false)

const handleOpenAudienceModal = () => profile.setOpenAudienceModal(true)
</script>

<template>
  <div class="mb-5">
    <AddAction v-if="showAddAction" :title="addActionTitle" @onAdd="handleEditText" />
    <ContentItem
      v-if="showContentItem"
      :text="text"
      :label="label"
      :icon="icon"
      @onEdit="handleEditText"
      @onSelectAudience="handleOpenAudienceModal"
    />
    <CommonForm
      v-if="editable && formType === EAboutTabFormType.COMMON"
      label="Email"
      :value="text"
      @onSelectAudience="handleOpenAudienceModal"
      @onCancel="handleCancelEdit"
    />
    <PhoneForm
      v-if="editable && formType === EAboutTabFormType.PHONE"
      :value="text"
      @onCancel="handleCancelEdit"
      @onSelectAudience="handleOpenAudienceModal"
    />
    <GenderForm
      v-if="editable && formType === EAboutTabFormType.GENDER"
      :value="text"
      @onCancel="handleCancelEdit"
      @onSelectAudience="handleOpenAudienceModal"
    />
    <BirthdayForm
      v-if="editable && formType === EAboutTabFormType.BIRTHDAY"
      :value="text"
      @onCancel="handleCancelEdit"
      @onSelectAudience="handleOpenAudienceModal"
    />
    <WorkForm
      v-if="editable && formType === EAboutTabFormType.WORK"
      @onCancel="handleCancelEdit"
      @onSelectAudience="handleOpenAudienceModal"
    />
  </div>
</template>
