<script setup lang="ts">
import { computed, defineEmits, defineProps, ref, watch } from 'vue'
import { Divider } from '@/components/UI'
import type { ApiQuery } from '@/services/type'
import type { Post } from '@/services/post/type'
import ModalLayout from '@/components/View/ModalLayout/ModalLayout.vue'
import ModalLayoutHead from '@/components/View/ModalLayout/ModalLayoutHead.vue'
import ModalLayoutBody from '@/components/View/ModalLayout/ModalLayoutBody.vue'
import ModalLayoutFoot from '@/components/View/ModalLayout/ModalLayoutFoot.vue'
import PostHead from '@/components/View/PostCard/PostHead.vue'
import PostBody from '@/components/View/PostCard/PostBody.vue'
import PostSummary from '@/components/View/PostCard/PostSummary.vue'
import PostActions from '@/components/View/PostCard/PostActions.vue'
import Comment from '@/components/View/Comment/Comment.vue'
import CommentInput from '@/components/View/Comment/CommentInput/CommentInput.vue'
import CommentModalLoading from './CommentLoading/CommentModalLoading.vue'
import useCommentStore from '@/components/View/Comment/CommentStore'
import usePostStore from '@/stores/PostStore'
import useGetPost from '@/features/home/hooks/useGetPost'
import helpers from '@/helpers'

interface CommentModalProps {
  open?: boolean
}

defineProps<CommentModalProps>()

const emits = defineEmits(['onClose'])

const postStore = usePostStore()

const comment = useCommentStore()

const post = ref<Post>(helpers.getPostInitialData())

const apiQuery = computed<ApiQuery>(() => ({ postId: postStore.id }))

const isFetch = computed<boolean>(() => Boolean(apiQuery.value.postId))

const { data: response, isLoading } = useGetPost(apiQuery, isFetch)

const uploadedClassName = computed<string>(() => (comment.uploaded ? 'modal-body-height' : ''))

const loading = computed<boolean>(() => isLoading.value || !apiQuery.value.postId)

const handleClose = () => {
  postStore.setId('')
  emits('onClose')
}

watch(response, (newResponse) => {
  if (!newResponse) return
  const postData = newResponse.data
  post.value = postData
})
</script>

<template>
  <ModalLayout rootClassName="comment-modal" :open="open" sizes="lg" @onClose="handleClose">
    <ModalLayoutHead title="User's post" @onClose="handleClose" />
    <ModalLayoutBody :rootClassName="uploadedClassName">
      <CommentModalLoading v-if="loading" />
      <template v-else>
        <PostHead :post="post" :hasRemove="false" />
        <PostBody :post="post" />
        <PostSummary />
        <Divider />
        <PostActions />
        <Divider />
        <Comment />
      </template>
    </ModalLayoutBody>
    <ModalLayoutFoot>
      <CommentInput />
    </ModalLayoutFoot>
  </ModalLayout>
</template>
