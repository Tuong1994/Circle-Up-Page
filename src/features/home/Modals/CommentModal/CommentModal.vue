<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue'
import { Divider } from '@/components/UI'
import ModalLayout from '@/components/View/ModalLayout/ModalLayout.vue'
import ModalNavigator from '../Components/ModalNavigator.vue'
import ModalBody from '../Components/ModalBody.vue'
import ModalFoot from '../Components/ModalFoot.vue'
import PostHead from '@/components/View/PostCard/PostHead.vue'
import PostBody from '@/components/View/PostCard/PostBody.vue'
import PostSummary from '@/components/View/PostCard/PostSummary.vue'
import PostActions from '@/components/View/PostCard/PostActions.vue'
import Comment from '@/components/View/Comment/Comment.vue'
import CommentInput from '@/components/View/Comment/CommentInput/CommentInput.vue'
import useCommentStore from '@/components/View/Comment/CommentStore'

interface CommentModalProps {
  open?: boolean
}

defineProps<CommentModalProps>()

const emits = defineEmits(['onClose'])

const comment = useCommentStore()

const uploadedClassName = computed<string>(() => (comment.uploaded ? 'modal-body-height' : ''))

const handleClose = () => emits('onClose')
</script>

<template>
  <ModalLayout rootClassName="comment-modal" :open="open" sizes="lg" @onClose="handleClose">
    <ModalNavigator title="User's post" @onClose="handleClose" />
    <ModalBody :rootClassName="uploadedClassName">
      <PostHead :hasRemove="false" />
      <PostBody />
      <PostSummary />
      <Divider />
      <PostActions />
      <Divider />
      <Comment />
    </ModalBody>
    <ModalFoot>
      <CommentInput />
    </ModalFoot>
  </ModalLayout>
</template>
