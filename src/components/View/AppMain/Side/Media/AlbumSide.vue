<script setup lang="ts">
import { computed, ref } from 'vue'
import { Button, Divider, Icon, Space, Tooltip } from '@/components/UI'
import { Input as InputComponent, TextArea } from '@/components/Control'
import { routePaths } from '@/router'
import { iconName } from '@/components/UI/Icon/constant'
import { useUploadMedia } from '@/hooks'
import { EPostActionType } from '@/services/post/enums'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import type { PostAction } from '@/services/post/type'
import ContentHead from '../../Components/ContentHead.vue'
import ContentBody from '../../Components/ContentBody.vue'
import AudiencesModal from '@/components/View/Audiences/AudiencesModal.vue'
import CheckinModal from './CheckinModal.vue'
import TagPeopleModal from './TagPeopleModal.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()

const inputRef = ref<HTMLInputElement | null>(null)

const { handleChange, handleTriggerInput } = useUploadMedia(inputRef)

const actionType = ref<EPostActionType>()

const actions = computed<PostAction[]>(() => [
  { type: EPostActionType.AUDIENCE, name: 'Public', icon: iconName.GLOBE },
  { type: EPostActionType.TAG, name: 'Tag', icon: iconName.TAG },
  { type: EPostActionType.CHECK_IN, name: 'Checkin', icon: iconName.MAP_MARKER_ALT }
])

const handleOpenModal = (type: EPostActionType) => (actionType.value = type)

const handleCloseModal = () => (actionType.value = undefined)
</script>

<template>
  <ContentHead :hasSubLink="false" :backPath="routePaths.PROFILE"> Create album </ContentHead>
  <ContentBody>
    <InputComponent :color="(layout.color as ControlColor)" :shape="(layout.shape as ControlShape)">
      <template #label>Album name</template>
    </InputComponent>
    <TextArea
      rootClassName="my-5"
      :rows="3"
      :color="(layout.color as ControlColor)"
      :shape="(layout.shape as ControlShape)"
    >
      <template #label>Description</template>
    </TextArea>
    <input multiple ref="inputRef" type="file" class="hidden" @input="handleChange" />
    <Space>
      <Button :color="layout.color" :shape="layout.shape" @click="handleTriggerInput">
        <Space aligns="middle">
          <Icon :iconName="iconName.IMAGE" />
          <span>Upload Photos</span>
        </Space>
      </Button>
      <Tooltip v-for="action in actions" :key="action.type">
        <template #title>
          <Button
            ghost
            :color="layout.color"
            :shape="layout.shape"
            @click="() => handleOpenModal(action.type)"
          >
            <Icon :iconName="action.icon" />
          </Button>
        </template>
        <template #content>
          {{ action.name }}
        </template>
      </Tooltip>
    </Space>
    <Divider />
    <Button :color="layout.color" :shape="layout.shape" rootClassName="w-full" sizes="lg"> Post </Button>
  </ContentBody>
  <AudiencesModal :open="actionType === EPostActionType.AUDIENCE" @onClose="handleCloseModal" />
  <TagPeopleModal :open="actionType === EPostActionType.TAG" @onClose="handleCloseModal" />
  <CheckinModal :open="actionType === EPostActionType.CHECK_IN" @onClose="handleCloseModal" />
</template>
