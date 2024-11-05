<script setup lang="ts">
import { computed, defineProps, ref, withDefaults } from 'vue'
import AddAction from './AddAction.vue'
import CommonForm from './Forms/CommonForm.vue'
import ContentItem from './ContentItem.vue'
import useProfileStore from '@/features/profile/store/useProfileStore'

interface ContentWrapperProps {
  text?: string
}

const props = withDefaults(defineProps<ContentWrapperProps>(), {
  text: ''
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
    <AddAction v-if="showAddAction" />
    <CommonForm v-if="editable" />
    <ContentItem v-if="showContentItem" />
  </div>
</template>
