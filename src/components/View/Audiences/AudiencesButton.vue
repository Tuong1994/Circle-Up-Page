<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'
import { Button, Space, Icon } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import type { ButtonProps } from '@/components/UI/Button/Button.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

interface AudiencesButtonProps extends ButtonProps {}

const props = defineProps<AudiencesButtonProps>()

const emits = defineEmits(['onClick'])

const layout = useLayoutStore()

const t = useLangStore()

const defaultProps = computed<ButtonProps>(() => ({
  ...(props as object),
  sizes: props.sizes ?? 'md',
  ghost: props.ghost ? props.ghost : true,
  color: props.color ?? layout.color
}))

const handleClick = () => emits('onClick')
</script>

<template>
  <Button v-bind="defaultProps" @click="handleClick">
    <Space aligns="middle">
      <Icon :iconName="iconName.USER_GROUP" />
      <span>{{ t.lang.home.modal.common.friends }}</span>
    </Space>
  </Button>
</template>
