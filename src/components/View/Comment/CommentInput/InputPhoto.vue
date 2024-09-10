<script setup lang="ts">
import { ref, defineEmits, defineProps, watchEffect, withDefaults } from 'vue'
import useCommentStore from '../CommentStore';

interface InputPhotoProps {
  id?: string
}

withDefaults(defineProps<InputPhotoProps>(), {
  id: 'inputPhoto'
})

const comment = useCommentStore();

const image = ref<File | null>(null)

const viewUrl = ref<string>('')

const uploading = ref<boolean>(false)

const emits = defineEmits(['onUpload', 'onRemove'])

const handleUpload = (file: File) => {
  image.value = file
  emits('onUpload', { file, url: viewUrl, uploading })
}

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const file = target.files ? target.files[0] : null
  if (file) handleUpload(file)
}

watchEffect(() => {
  if (!image.value) return
  const reader = new FileReader()
  reader.onloadstart = () => (uploading.value = true)
  reader.onloadend = () => {
    viewUrl.value = reader.result as string
    uploading.value = false
    comment.uploaded = true
  }
  reader.readAsDataURL(image.value)
})
</script>

<template>
  <label>
    <input :id="id" type="file" class="hidden" @input="handleChange" />
    <slot></slot>
  </label>
</template>
