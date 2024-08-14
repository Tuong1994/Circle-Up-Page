<script setup lang="ts">
import { ref } from 'vue'
import { Grid, Space, Icon, Avatar, Typography, Dropdown, Divider } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import ItemWrapper from '../../ItemWrapper/ItemWrapper.vue'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

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

const handleSelect = (selected: boolean, id: string) => {
  if (!selected) return (selectedItem.value = '')
  selectedItem.value = id
}
</script>

<template>
  <Row justify="between" aligns="middle">
    <Col>
      <Paragraph :weight="600" :size="18">{{ t.lang.common.header.features.notification }}</Paragraph>
    </Col>
    <Col>
      <Dropdown>
        <template #label>
          <Icon :iconName="iconName.ELLIPSIS_H" :size="iconSize" />
        </template>
      </Dropdown>
    </Col>
  </Row>
  <Divider />
  <ItemWrapper v-for="item in items" :key="item.id" @onSelect="(selected) => handleSelect(selected, item.id)">
    <Row justify="between" aligns="middle">
      <Col>
        <Space aligns="middle">
          <Avatar :size="40" />
          <div>
            <Paragraph>Notification</Paragraph>
            <Paragraph :size="11" :weight="600" variant="warning">1h</Paragraph>
          </div>
        </Space>
      </Col>
      <Col>
        <Dropdown v-if="selectedItem === item.id" placement="right">
          <template #label>
            <Icon :iconName="iconName.ELLIPSIS_H" :size="iconSize" />
          </template>
          <template #dropdown> Setting </template>
        </Dropdown>
      </Col>
    </Row>
  </ItemWrapper>
</template>
