<script setup lang="ts">
import { defineEmits } from 'vue'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import Audiences from '@/components/View/Audiences/Audiences.vue';
import useLangStore from '@/stores/LangStore';

const emits = defineEmits(['onBack'])

const t = useLangStore()

const handleBack = () => emits('onBack')
</script>

<template>
  <ModalLayoutHead :title="t.lang.profile.about.audience" type="sub" @onBack="handleBack" />
  <ModalLayoutBody>
    <Audiences />
  </ModalLayoutBody>
</template>
