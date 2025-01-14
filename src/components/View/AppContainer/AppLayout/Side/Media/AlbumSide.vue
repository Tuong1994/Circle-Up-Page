<script setup lang="ts">
import { computed, ref, type StyleValue } from 'vue'
import { Button, Divider, Icon, Space, Tooltip } from '@/components/UI'
import { Input as InputComponent, TextArea } from '@/components/Control'
import { routePaths } from '@/router'
import { iconName } from '@/components/UI/Icon/constant'
import { useUploadMedia, useViewPoint } from '@/hooks'
import { breakpoint } from '@/hooks/features/useViewPoint'
import { EPostActionType } from '@/services/post/enums'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import type { PostAction } from '@/services/post/type'
import ContentHead from '../../Components/ContentHead.vue'
import ContentBody from '../../Components/ContentBody.vue'
import AudiencesModal from '@/components/View/Audiences/AudiencesModal.vue'
import AlbumList from '@/features/media/AlbumList.vue'
import CheckinModal from './CheckinModal.vue'
import TagPeopleModal from './TagPeopleModal.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const layout = useLayoutStore()

const t = useLangStore()

const { screenWidth } = useViewPoint()

const { MD_TABLET } = breakpoint

const inputRef = ref<HTMLInputElement | null>(null)

const { viewImages, handleChange, handleTriggerInput } = useUploadMedia(inputRef)

const actionType = ref<EPostActionType>()

const isMobile = computed<boolean>(() => screenWidth.value < MD_TABLET)

const renderList = computed<boolean>(() => viewImages.value.length > 0 && isMobile.value)

const bodyStyle = computed<StyleValue>(() => (isMobile.value ? { height: 'auto' } : undefined))

const actions = computed<PostAction[]>(() => [
  { type: EPostActionType.AUDIENCE, name: 'Public', icon: iconName.GLOBE },
  { type: EPostActionType.TAG, name: 'Tag', icon: iconName.TAG },
  { type: EPostActionType.CHECK_IN, name: 'Checkin', icon: iconName.MAP_MARKER_ALT }
])

const handleOpenModal = (type: EPostActionType) => (actionType.value = type)

const handleCloseModal = () => (actionType.value = undefined)
</script>

<template>
  <ContentHead :hasSubLink="false" :backPath="routePaths.PROFILE">
    {{ t.lang.media.album.side.title }}
  </ContentHead>
  <ContentBody :rootStyle="bodyStyle">
    <InputComponent :color="(layout.color as ControlColor)" :shape="(layout.shape as ControlShape)">
      <template #label>
        {{ t.lang.common.form.label.albumName }}
      </template>
    </InputComponent>
    <TextArea
      rootClassName="my-5"
      :rows="3"
      :color="(layout.color as ControlColor)"
      :shape="(layout.shape as ControlShape)"
    >
      <template #label>
        {{ t.lang.common.form.label.desc }}
      </template>
    </TextArea>
    <input multiple ref="inputRef" type="file" class="hidden" @input="handleChange" />
    <Space>
      <Button :color="layout.color" :shape="layout.shape" @click="handleTriggerInput">
        <Space aligns="middle">
          <Icon :iconName="iconName.IMAGE" />
          <span>{{ t.lang.media.actions.upload }}</span>
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
    <template v-if="renderList">
      <Divider />
      <AlbumList :hasTitle="false" />
    </template>
    <Divider />
    <Button :color="layout.color" :shape="layout.shape" rootClassName="w-full" sizes="lg">
      {{ t.lang.media.actions.post }}
    </Button>
  </ContentBody>
  <AudiencesModal :open="actionType === EPostActionType.AUDIENCE" @onClose="handleCloseModal" />
  <TagPeopleModal :open="actionType === EPostActionType.TAG" @onClose="handleCloseModal" />
  <CheckinModal :open="actionType === EPostActionType.CHECK_IN" @onClose="handleCloseModal" />
</template>
