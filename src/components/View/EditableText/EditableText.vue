<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'
import TextControl from './TextControl.vue'
import TextView from './TextView.vue'
import TextAddAction from './TextAddAction.vue'
import useEditableTextStore from './EditableTextStore'

interface EditableTextProps {
  icon?: string
  text?: string
  subText?: string
}

const props = withDefaults(defineProps<EditableTextProps>(), {
  text: '',
  subText: ''
})

const editable = useEditableTextStore()

const showAddAction = computed<boolean>(() => Boolean(!props.text && !editable.editText))

const showTextView = computed<boolean>(() => Boolean(props.text && !editable.editText))
</script>

<template>
  <TextAddAction v-if="showAddAction" />
  <TextView v-if="showTextView" :icon="icon" :text="text" :subText="subText" />
  <TextControl v-if="editable.editText" :textValue="text" />
</template>
