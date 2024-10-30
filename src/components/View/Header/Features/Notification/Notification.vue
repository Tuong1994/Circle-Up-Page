<script setup lang="ts">
import { computed, ref, defineEmits, defineProps } from 'vue'
import { Grid, Space, Button, Icon, Avatar, Typography, Dropdown, Divider } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import { EHeaderFeatureType } from '../../enum'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

interface FeatureNotificationProps {
  responsive?: boolean;
}

defineProps<FeatureNotificationProps>()

const emits = defineEmits(['onBack'])

const t = useLangStore()

const iconSize = 18

const selectedItem = ref<string>('')

const items = [
  { id: 'item-1' },
  { id: 'item-2' },
  { id: 'item-3' },
  { id: 'item-4' },
  { id: 'item-5' },
  { id: 'item-6' },
  { id: 'item-7' },
  { id: 'item-8' },
  { id: 'item-9' },
  { id: 'item-10' }
]

const settings = computed(() => [
  { id: 'mark', title: t.lang.common.header.features.notification.markReadAll, iconName: iconName.CHECK },
  { id: 'open', title: t.lang.common.header.features.notification.open, iconName: iconName.GEAR }
])

const itemSettings = computed(() => [
  { id: 'mark', title: t.lang.common.header.features.notification.markRead, iconName: iconName.CHECK },
  { id: 'remove', title: t.lang.common.header.features.notification.remove, iconName: iconName.X_MARK_CIRCLE }
])

const handleSelect = (selected: boolean, id: string) => {
  if (!selected) return (selectedItem.value = '')
  selectedItem.value = id
}

const handleBack = () => emits('onBack', EHeaderFeatureType.NOTIFICATION)
</script>

<template>
  <Row justify="between" aligns="middle">
    <Col>
      <Space aligns="middle">
        <Button shape="round" @click="handleBack" v-if="responsive">
          <Icon :iconName="iconName.ANGLE_LEFT" />
        </Button>
        <Paragraph :weight="600" :size="18">{{ t.lang.common.header.features.notification.title }}</Paragraph>
      </Space>
    </Col>
    <Col>
      <Dropdown placement="right">
        <template #label>
          <Icon :iconName="iconName.ELLIPSIS_H" :size="iconSize" />
        </template>
        <template #dropdown>
          <div class="p-2">
            <ItemWrapper v-for="setting in settings" :key="setting.id">
              <Space aligns="middle">
                <Icon :iconName="setting.iconName" />
                <span>{{ setting.title }}</span>
              </Space>
            </ItemWrapper>
          </div>
        </template>
      </Dropdown>
    </Col>
  </Row>
  <Divider />
  <ItemWrapper
    v-for="(item, idx) in items"
    :key="item.id"
    @onSelect="(selected) => handleSelect(selected, item.id)"
  >
    <Row justify="between" aligns="middle">
      <Col>
        <Space aligns="middle">
          <Avatar :size="40" />
          <div>
            <Paragraph>Notification</Paragraph>
            <Paragraph :size="11" :weight="600" variant="secondary">1h</Paragraph>
          </div>
        </Space>
      </Col>
      <Col>
        <Dropdown v-if="selectedItem === item.id" placement="right" :isBottom="idx === items.length - 1">
          <template #label>
            <Icon :iconName="iconName.ELLIPSIS_H" :size="iconSize" />
          </template>
          <template #dropdown>
            <div class="p-2">
              <ItemWrapper v-for="setting in itemSettings" :key="setting.id">
                <Space aligns="middle">
                  <Icon :iconName="setting.iconName" />
                  <span>{{ setting.title }}</span>
                </Space>
              </ItemWrapper>
            </div>
          </template>
        </Dropdown>
      </Col>
    </Row>
  </ItemWrapper>
</template>
