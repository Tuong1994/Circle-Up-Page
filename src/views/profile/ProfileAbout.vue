<script setup lang="ts">
import { computed } from 'vue'
import { useViewPoint } from '@/hooks'
import AboutDesktop from '@/features/profile/components/ProfileAbout/AboutDesktop/AboutDesktop.vue'
import AudiencesModal from '@/components/View/Audiences/AudiencesModal.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useProfileStore from '@/features/profile/store/ProfileStore'
import AboutMobile from '@/features/profile/components/ProfileAbout/AboutMobile/AboutMobile.vue'

const layout = useLayoutStore()

const profile = useProfileStore()

const { isPhone, isTablet } = useViewPoint()

const colorClassName = computed<string>(() => `profile-about-${layout.color}`)

const shapeClassName = computed<string>(() => `profile-about-${layout.shape}`)

const responsive = computed<boolean>(() => Boolean(isPhone.value || isTablet.value))

const handleCloseAudienceModal = () => profile.setOpenAudienceModal(false)
</script>

<template>
  <div :class="['profile-about', colorClassName, shapeClassName]">
    <AboutDesktop v-if="!responsive" />
    <AboutMobile v-if="responsive" />
  </div>
  <AudiencesModal :open="profile.openAudienceModal" @onClose="handleCloseAudienceModal" />
</template>
