<script setup lang="ts">
import { withDefaults, defineProps, defineEmits, computed } from 'vue'
import { Avatar, Space, Dropdown, Icon, Typography } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import type { Comment } from './Comment.vue'
import type { ActiveComment } from './type'
import CommentList from './CommentList.vue'
import CommentInput from './CommentInput/CommentInput.vue'
import HoverInfo from '../HoverInfo/HoverInfo.vue'
import useLangStore from '@/stores/LangStore'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Paragraph } = Typography

interface CommentItemProps {
  comment: Comment
  comments: Comment[]
  activeComment: ActiveComment
}

const props = withDefaults(defineProps<CommentItemProps>(), {
  comments: () => []
})

const emits = defineEmits(['onReply', 'onCancelReply'])

const t = useLangStore()

const layout = useLayoutStore()

const childComments = props.comments.filter((childComment) => childComment.parentId === props.comment.id)

const actionClassName = computed<string>(() => `main-action main-action-${layout.color}`)

const isReply = computed<boolean>(
  () => props.activeComment.id === props.comment.id && props.activeComment.type === 'reply'
)

const handleReply = () => emits('onReply', props.comment.id)

const handleCancelReply = () => emits('onCancelReply')
</script>

<template>
  <div class="comment-item">
    <div class="item-main">
      <Space>
        <HoverInfo>
          <Avatar :size="35" />
        </HoverInfo>
        <div>
          <div class="main-content">
            <HoverInfo>
              <Paragraph :weight="600" :size="12">Author name</Paragraph>
            </HoverInfo>
            <Paragraph>{{ comment.content }}</Paragraph>
          </div>
          <Space aligns="middle">
            <Paragraph :size="12" variant="secondary">1d</Paragraph>
            <Paragraph :size="12" :weight="600" :rootClassName="actionClassName">
              {{ t.lang.common.comment.like }}
            </Paragraph>
            <Paragraph :size="12" :weight="600" :rootClassName="actionClassName" @click="handleReply">
              {{ t.lang.common.comment.reply }}
            </Paragraph>
            <Dropdown trigger="hover">
              <template #label>
                <Icon :size="12" :iconName="iconName.THUMBS_UP" />
              </template>
              <template #dropdown> content </template>
            </Dropdown>
          </Space>
        </div>
      </Space>
    </div>
    <div class="item-child">
      <CommentInput v-if="isReply" hasCancel @onCancel="handleCancelReply" />
      <CommentList :rootComments="childComments" :listComments="comments" />
    </div>
  </div>
</template>
