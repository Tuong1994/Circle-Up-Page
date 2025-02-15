<script setup lang="ts">
import { withDefaults, defineProps, defineEmits } from 'vue'
import {
  Card,
  Image,
  Typography,
  Grid,
  Space,
  Avatar,
  Button,
  Icon,
  Divider,
  Dropdown
} from '@/components/UI'
import { iconName } from '@/components/UI/Icon/constant'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'
import defaultImage from '/default.jpg'

const { Paragraph } = Typography

const { Row, Col } = Grid

interface SavedItemsCardProps {
  hasAddAction?: boolean
}

withDefaults(defineProps<SavedItemsCardProps>(), {
  hasAddAction: true
})

const emits = defineEmits(['onAdd', 'onRemove'])

const t = useLangStore()

const layout = useLayoutStore()

const handleAdd = () => emits('onAdd')

const handleRemove = () => emits('onRemove')
</script>

<template>
  <Card hoverable>
    <template #body>
      <Row justify="between">
        <Col :xs="24" :md="8" :lg="8" :span="8">
          <Image :src="defaultImage" imgWidth="100%" imgHeight="100%" rootClassName="image-full-size" />
        </Col>
        <Col :xs="24" :md="16" :lg="16" :span="16">
          <Paragraph :size="16" :weight="600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit
          </Paragraph>
          <Space :size="5" aligns="middle">
            <Paragraph :size="12" variant="secondary">Post</Paragraph>
            <Paragraph :size="16" :weight="600" variant="secondary">-</Paragraph>
            <Paragraph :size="12" variant="secondary">
              {{ t.lang.saved.items.savedTo }}
            </Paragraph>
            <Paragraph :size="12">Collection name</Paragraph>
          </Space>
          <Space :size="5" aligns="middle">
            <Avatar :size="20" :color="layout.color" />
            <Paragraph :size="12" variant="secondary">
              {{ t.lang.saved.items.savedFrom }}
            </Paragraph>
            <Paragraph :size="12">Item Author</Paragraph>
          </Space>
          <Divider />
          <Space aligns="middle">
            <Button v-if="hasAddAction" :color="layout.color" :shape="layout.shape" @click="handleAdd">
              {{ t.lang.saved.items.add }}
            </Button>
            <Dropdown v-if="hasAddAction">
              <template #label>
                <Button :color="layout.color" :shape="layout.shape" ghost>
                  <Icon :iconName="iconName.ELLIPSIS_H" />
                </Button>
              </template>
              <template #dropdown>
                <div class="p-2">
                  <ItemWrapper>
                    <Space aligns="middle" @click="handleRemove">
                      <Icon :iconName="iconName.TRASH" />
                      <Paragraph>
                        {{ t.lang.saved.items.unsaved }}
                      </Paragraph>
                    </Space>
                  </ItemWrapper>
                </div>
              </template>
            </Dropdown>
            <Button v-else :color="layout.color" :shape="layout.shape" ghost @click="handleRemove">
              <Space aligns="middle">
                <Icon :iconName="iconName.TRASH" />
                <Paragraph>
                  {{ t.lang.saved.items.unsaved }}
                </Paragraph>
              </Space>
            </Button>
          </Space>
        </Col>
      </Row>
    </template>
  </Card>
</template>
