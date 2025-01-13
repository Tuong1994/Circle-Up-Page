<script setup lang="ts">
import { ref } from 'vue'
import { Card, Button, Space } from '@/components/UI'
import { Input } from '@/components/Control'
import type { AuthForgotPassword } from '@/services/auth/type'
import AuthFormLayout from '@/features/auth/AuthFormLayout.vue'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const t = useLangStore()

const layout = useLayoutStore()

const formData = ref<AuthForgotPassword>({
  email: ''
})
</script>

<template>
  <AuthFormLayout :initialValues="formData">
    <template #head></template>
    <template #body></template>
  </AuthFormLayout>
</template>
