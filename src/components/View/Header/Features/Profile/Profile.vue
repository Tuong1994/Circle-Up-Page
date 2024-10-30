<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import { EHeaderFeatureType, EProfileMenuType } from '../../enum'
import Slider from '@/components/View/Slider/Slider.vue'
import ProfileMenu from './ProfileMenu.vue'
import ProfileLang from './ProfileLang.vue'
import ProfileDisplay from './ProfileDisplay.vue'

interface FeatureProfileProps {
  responsive?: boolean
}

defineProps<FeatureProfileProps>()

const emits = defineEmits(['onBack'])

const slided = ref<boolean>(false)

const type = ref<EProfileMenuType>(EProfileMenuType.LOGOUT)

const handleSlided = (menuType: EProfileMenuType) => {
  slided.value = true
  type.value = menuType
}

const handleSlidedBack = () => {
  slided.value = false
  type.value = EProfileMenuType.LOGOUT
}

const handleBack = (type: EHeaderFeatureType) => emits('onBack', type)
</script>

<template>
  <Slider :slided="slided">
    <template #main>
      <ProfileMenu :responsive="responsive" @onSelect="handleSlided" @onBack="handleBack" />
    </template>
    <template #sub>
      <ProfileLang v-if="type === EProfileMenuType.LANGUAGE" @onBack="handleSlidedBack" />
      <ProfileDisplay v-if="type === EProfileMenuType.DISPLAY" @onBack="handleSlidedBack" />
    </template>
  </Slider>
</template>
