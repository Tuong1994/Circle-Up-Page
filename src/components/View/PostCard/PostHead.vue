<script setup lang="ts">
import { computed, withDefaults, defineProps } from 'vue'
import { Grid, Space, Avatar, Dropdown, Icon, Typography, Button } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import HoverInfo from '@/components/View/HoverInfo/HoverInfo.vue'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useViewPoint from '@/hooks/useViewPoint'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

interface PostHeadProps {
  hasRemove?: boolean
}

withDefaults(defineProps<PostHeadProps>(), {
  hasRemove: true
})

const t = useLangStore()

const { isSmPhone } = useViewPoint()

const settings = computed(() => [
  {
    id: 'interested',
    title: t.lang.home.post.setting.interested,
    desc: t.lang.home.post.setting.desc_1,
    iconName: iconName.PLUS
  },
  {
    id: 'notInterested',
    title: t.lang.home.post.setting.notInterested,
    desc: t.lang.home.post.setting.desc_2,
    iconName: iconName.MINUS
  },
  {
    id: 'save',
    title: t.lang.home.post.setting.save,
    desc: t.lang.home.post.setting.desc_3,
    iconName: iconName.TAG
  },
  {
    id: 'hide',
    title: t.lang.home.post.setting.hide,
    desc: t.lang.home.post.setting.desc_4,
    iconName: iconName.X_MARK
  },
  {
    id: 'hideAll',
    title: t.lang.home.post.setting.hideAll,
    desc: t.lang.home.post.setting.desc_5,
    iconName: iconName.X_MARK_CIRCLE
  }
])

const iconSize = 18
</script>

<template>
  <Row justify="between">
    <Col>
      <Space aligns="middle">
        <HoverInfo>
          <Avatar :size="40" />
        </HoverInfo>
        <div>
          <Space aligns="middle">
            <HoverInfo>
              <Paragraph>User name</Paragraph>
            </HoverInfo>
            <Button text>{{ t.lang.home.post.follow }}</Button>
          </Space>
          <Paragraph :size="11" variant="secondary">a day ago</Paragraph>
        </div>
      </Space>
    </Col>
    <Col>
      <Space size="md" aligns="middle">
        <Dropdown placement="right" v-if="!isSmPhone">
          <template #label>
            <Icon :size="iconSize" :iconName="iconName.ELLIPSIS_H" />
          </template>
          <template #dropdown>
            <div class="post-setting">
              <ItemWrapper v-for="setting in settings" :key="setting.id">
                <Space aligns="middle">
                  <Avatar>
                    <Icon :iconName="setting.iconName" :size="iconSize" />
                  </Avatar>
                  <div>
                    <Paragraph :weight="600">{{ setting.title }}</Paragraph>
                    <Paragraph :size="12" variant="secondary">{{ setting.desc }}</Paragraph>
                  </div>
                </Space>
              </ItemWrapper>
            </div>
          </template>
        </Dropdown>
        <Icon v-if="hasRemove" :size="iconSize" :iconName="iconName.X_MARK" />
      </Space>
    </Col>
  </Row>
</template>
