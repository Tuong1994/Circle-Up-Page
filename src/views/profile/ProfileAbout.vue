<script setup lang="ts">
import { computed } from 'vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import AboutTabs from '@/features/profile/components/ProfileAbout/AboutTabs.vue'
import AudiencesModal from '@/features/profile/components/ProfileAbout/Common/AudiencesModal.vue'
import useProfileStore from '@/features/profile/store/useProfileStore'

const layout = useLayoutStore()

const profile = useProfileStore()

const colorClassName = computed<string>(() => `profile-about-${layout.color}`)

const shapeClassName = computed<string>(() => `profile-about-${layout.shape}`)

const handleCloseAudienceModal = () => profile.setOpenAudienceModal(false)
</script>

<template>
  <div :class="['profile-about', colorClassName, shapeClassName]">
    <AboutTabs />
  </div>
  <AudiencesModal :open="profile.openAudienceModal" @onClose="handleCloseAudienceModal" />
</template>
