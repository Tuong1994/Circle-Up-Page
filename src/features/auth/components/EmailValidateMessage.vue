<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { Icon, Typography, Space, Loading } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'

const { Paragraph } = Typography

const { Spinner } = Loading

interface EmailValidateMessageProps {
  isValidating: boolean
  isInValid: boolean
}

const props = defineProps<EmailValidateMessageProps>()

const isSuccess = computed<boolean>(() => Boolean(!props.isValidating && !props.isInValid))

const isError = computed<boolean>(() => Boolean(!props.isValidating && props.isInValid))
</script>

<template>
  <Space v-if="isSuccess" aligns="middle">
    <Icon color="green" :iconName="iconName.CHECK" />
    <Paragraph variant="success"> This email can be used </Paragraph>
  </Space>
  <Space v-if="isValidating" aligns="middle">
    <Spinner />
    <Paragraph> Checking </Paragraph>
  </Space>
  <Space v-if="isError" aligns="middle">
    <Icon color="red" :iconName="iconName.X_MARK" />
    <Paragraph variant="danger"> This email already exist </Paragraph>
  </Space>
</template>
