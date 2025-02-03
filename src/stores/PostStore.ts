import { ref } from 'vue'
import { defineStore } from 'pinia'
import { EAudienceType } from '@/components/View/Audiences/enum'
import { ERole } from '@/services/user/enum'
import type { Post } from '@/services/post/type'

const initialPostData: Post = {
  id: '',
  content: '',
  audience: EAudienceType.PUBLIC,
  userId: '',
  comments: [],
  likes: [],
  medias: [],
  followers: [],
  tags: [],
  user: {
    id: '',
    firstName: '',
    lastName: '',
    role: ERole.USER
  },
  createdAt: new Date(),
  updatedAt: new Date()
}

const usePostStore = defineStore('post', () => {
  const post = ref<Post>(initialPostData)
  const id = ref<string>('')
  const openModal = ref<boolean>(false)
  const setOpenModal = (open: boolean) => (openModal.value = open)
  const setPost = (postData: Post) => (post.value = postData)
  const setId = (postId: string) => (id.value = postId)
  const resetPost = () => (post.value = initialPostData)
  return { openModal, post, id, setOpenModal, setPost, setId, resetPost }
})

export default usePostStore
