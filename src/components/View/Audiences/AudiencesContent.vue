<script setup lang="ts">
import { ref, defineProps, computed } from 'vue'
import { Grid, Icon, Space, Typography } from '@/components/UI'
import { Radio } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import { EAudienceType } from './enum'
import type { ClickBoxColor } from '@/components/Control/type'
import type { Audience } from './type'
import ItemWrapper from '../ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

const { Paragraph } = Typography

interface AudiencesContentProps {
  defaultType?: EAudienceType
}

const props = withDefaults(defineProps<AudiencesContentProps>(), {
  defaultType: EAudienceType.PUBLIC
})

const t = useLangStore()

const layout = useLayoutStore()

const selectedType = ref<EAudienceType>(props.defaultType)

const audiences = computed<Audience[]>(() => [
  {
    type: EAudienceType.PUBLIC,
    name: t.lang.common.audiences.public.title,
    content: t.lang.common.audiences.public.desc,
    icon: iconName.GLOBE
  },
  {
    type: EAudienceType.FRIENDS,
    name: t.lang.common.audiences.friends.title,
    content: t.lang.common.audiences.friends.desc,
    icon: iconName.USER_GROUP
  },
  {
    type: EAudienceType.PRIVATE,
    name: t.lang.common.audiences.private.title,
    content: t.lang.common.audiences.private.desc,
    icon: iconName.LOCK
  }
])

const isSelected = (type: EAudienceType) => selectedType.value === type

const handleSelect = (value: EAudienceType) => (selectedType.value = value)
</script>

<template>
  <ItemWrapper
    v-for="audience in audiences"
    :key="audience.type"
    rootClassName="my-5"
    @click="() => handleSelect(audience.type)"
  >
    <Row justify="between" aligns="middle">
      <Col>
        <Space size="md" aligns="middle">
          <Icon rootClassName="w-12" :iconName="audience.icon" :size="30" />
          <div>
            <Paragraph>{{ audience.name }}</Paragraph>
            <Paragraph variant="secondary" :size="12">{{ audience.content }}</Paragraph>
          </div>
        </Space>
      </Col>
      <Col>
        <Radio
          name="audience"
          :checked="isSelected(audience.type)"
          :color="(layout.color as ClickBoxColor)"
        />
      </Col>
    </Row>
  </ItemWrapper>
</template>
