<script setup lang="ts">
import { computed, defineProps, ref, withDefaults } from 'vue'
import { EAboutTabFormType } from '@/features/profile/enum'
import type { AboutTabFormType } from '@/features/profile/type'
import AddAction from './AddAction.vue'
import ContentItem from './ContentItem.vue'
import CommonForm, { type CommonFormProps } from './Forms/CommonForm.vue'
import PhoneForm, { type PhoneFormProps } from './Forms/PhoneForm.vue'
import GenderForm, { type GenderFormProps } from './Forms/GenderForm.vue'
import BirthdayForm, { type BirthdayFormProps } from './Forms/BirthdayForm.vue'
import WorkForm, { type WorkFormProps } from './Forms/WorkForm.vue'
import EducationForm, { type EducationFormProps } from './Forms/EducationForm.vue'
import LivedForm, { type LivedFormProps } from './Forms/LivedForm.vue'
import RelationshipForm, { type RelationshipProps } from './Forms/RelationshipForm.vue'
import useProfileStore from '@/features/profile/store/ProfileStore'
import useAuthStore from '@/stores/AuthStore'
import useLangStore from '@/stores/LangStore'

interface ContentWrapperProps {
  text?: string
  subText?: string
  label?: string
  icon?: string
  addActionTitle?: string
  formType?: AboutTabFormType
  commonFormProps?: CommonFormProps
  phoneFormProps?: PhoneFormProps
  genderFormProps?: GenderFormProps
  birthdayFormProps?: BirthdayFormProps
  workFormProps?: WorkFormProps
  educationFormProps?: EducationFormProps
  livedFormProps?: LivedFormProps
  relationshipFormProps?: RelationshipProps
}

const props = withDefaults(defineProps<ContentWrapperProps>(), {
  text: '',
  formType: EAboutTabFormType.COMMON
})

const profile = useProfileStore()

const auth = useAuthStore()

const t = useLangStore()

const editable = ref<boolean>(false)

const showAddAction = computed<boolean>(() => Boolean(auth.isAuth && !props.text && !editable.value))

const showContentItem = computed<boolean>(() => Boolean(props.text && !editable.value))

const handleEditText = () => (editable.value = true)

const handleCancelEdit = () => (editable.value = false)

const handleOpenAudienceModal = () => profile.setOpenAudienceModal(true)
</script>

<template>
  <div class="mb-5">
    <ContentItem
      v-if="showContentItem"
      :text="text"
      :subText="subText"
      :label="label"
      :icon="icon"
      @onEdit="handleEditText"
      @onSelectAudience="handleOpenAudienceModal"
    />
    <AddAction v-if="showAddAction" :title="addActionTitle" @onAdd="handleEditText" />
    <CommonForm
      v-if="editable && formType === EAboutTabFormType.COMMON"
      v-bind="commonFormProps"
      :label="t.lang.common.form.label.email"
      :value="text"
      @onCancel="handleCancelEdit"
      @onSelectAudience="handleOpenAudienceModal"
    />
    <PhoneForm
      v-if="editable && formType === EAboutTabFormType.PHONE"
      v-bind="phoneFormProps"
      :value="text"
      @onCancel="handleCancelEdit"
      @onSelectAudience="handleOpenAudienceModal"
    />
    <GenderForm
      v-if="editable && formType === EAboutTabFormType.GENDER"
      v-bind="genderFormProps"
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
      v-bind="workFormProps"
      @onCancel="handleCancelEdit"
      @onSelectAudience="handleOpenAudienceModal"
    />
    <EducationForm
      v-if="editable && formType === EAboutTabFormType.EDUCATION"
      v-bind="educationFormProps"
      @onCancel="handleCancelEdit"
      @onSelectAudience="handleOpenAudienceModal"
    />
    <LivedForm
      v-if="editable && formType === EAboutTabFormType.LIVED"
      v-bind="livedFormProps"
      @onCancel="handleCancelEdit"
      @onSelectAudience="handleOpenAudienceModal"
    />
    <RelationshipForm
      v-if="editable && formType === EAboutTabFormType.RELATIONSHIP"
      v-bind="relationshipFormProps"
      @onCancel="handleCancelEdit"
      @onSelectAudience="handleOpenAudienceModal"
    />
  </div>
</template>
@/features/profile/store/ProfileStore
