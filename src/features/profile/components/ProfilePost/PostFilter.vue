<script setup lang="ts">
import { ref } from 'vue'
import { Card, Grid, Space, Typography, Icon, Button } from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import FilterModal from './FilterModal.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const { Row, Col } = Grid

const t = useLangStore()

const layout = useLayoutStore()

const open = ref<boolean>(false)

const handleOpenModal = () => (open.value = true)

const handleCloseModal = () => (open.value = false)
</script>

<template>
  <Card rootClassName="mb-5">
    <template #body>
      <Row justify="between" aligns="middle">
        <Col>
          <Paragraph :size="18" :weight="600">
            {{ t.lang.profile.post.filters.title }}
          </Paragraph>
        </Col>
        <Col>
          <Button :color="layout.color" :shape="layout.shape" ghost @click="handleOpenModal">
            <Space aligns="middle">
              <Icon :iconName="iconName.SLIDERS_H" />
              <span>{{ t.lang.profile.actions.filters }}</span>
            </Space>
          </Button>
        </Col>
      </Row>
    </template>
  </Card>
  <FilterModal :open="open" @onClose="handleCloseModal" />
</template>
