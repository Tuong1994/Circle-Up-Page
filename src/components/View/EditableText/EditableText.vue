<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import { iconName } from '@/components/UI/Icon/constant'
import TextControl from './TextControl.vue'
import TextView from './TextView.vue'
import TextAddAction from './TextAddAction.vue'

interface EditableTextProps {
  icon?: string
  text?: string
  subText?: string
}

withDefaults(defineProps<EditableTextProps>(), {
  icon: iconName.BOOKMARK,
  text: 'Editable text',
  subText: 'Label'
})
</script>

<template>
  <TextAddAction />
  <TextView />
  <TextControl />
</template>
