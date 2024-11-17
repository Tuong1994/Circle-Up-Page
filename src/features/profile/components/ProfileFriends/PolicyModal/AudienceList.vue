<script setup lang="ts">
import { defineEmits } from 'vue'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import Audiences from '@/components/View/Audiences/Audiences.vue';

const emits = defineEmits(['onBack'])

const handleBack = () => emits('onBack')
</script>

<template>
  <ModalLayoutHead title="Select audiences" type="sub" @onBack="handleBack" />
  <ModalLayoutBody>
    <Audiences />
  </ModalLayoutBody>
</template>
