<script setup lang="ts">
import { ref } from 'vue'
import { Button, Divider, Icon, Space } from '@/components/UI'
import { Input as InputComponent } from '@/components/Control'
import { routePaths } from '@/router'
import { iconName } from '@/components/UI/Icon/constant'
import { useUploadMedia } from '@/hooks'
import type { ControlShape, ControlColor } from '@/components/Control/type'
import ContentHead from '../../Components/ContentHead.vue'
import ContentBody from '../../Components/ContentBody.vue'
import AudiencesButton from '@/components/View/Audiences/AudiencesButton.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const layout = useLayoutStore()

const inputRef = ref<HTMLInputElement | null>(null)

const { handleChange, handleTriggerInput } = useUploadMedia(inputRef)
</script>

<template>
  <ContentHead :hasSubLink="false" :backPath="routePaths.PROFILE"> Create album </ContentHead>
  <ContentBody>
    <InputComponent
      rootClassName="my-5"
      :color="(layout.color as ControlColor)"
      :shape="(layout.shape as ControlShape)"
    >
      <template #label>Album name</template>
    </InputComponent>
    <input multiple ref="inputRef" type="file" class="hidden" @input="handleChange" />
    <Space>
      <Button :color="layout.color" :shape="layout.shape" @click="handleTriggerInput">
        <Space aligns="middle">
          <Icon :iconName="iconName.IMAGE" />
          <span>Upload Photos</span>
        </Space>
      </Button>
      <AudiencesButton :shape="layout.shape" />
    </Space>
    <Divider />
    <Button :color="layout.color" :shape="layout.shape" rootClassName="w-full" sizes="lg"> Post </Button>
  </ContentBody>
</template>
