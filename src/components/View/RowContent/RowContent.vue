<script setup lang="ts">
import { computed, defineProps, withDefaults } from 'vue'
import { Grid } from '@/components/UI'
import type { GridColProps } from '@/components/UI/Grid/Col.vue'
import type { GridRowProps } from '@/components/UI/Grid/Row.vue'

const { Row, Col } = Grid

interface RowContentProps {
  rootClassName?: string
  gridRowProps?: GridRowProps
  gridColProps?: GridColProps
}

const props = withDefaults(defineProps<RowContentProps>(), {
  rootClassName: ''
})

const rowProps = computed<GridRowProps>(() => ({
  ...(props.gridRowProps as object),
  aligns: 'middle'
}))
</script>

<template>
  <div :class="['row-content', rootClassName]">
    <Row v-bind="rowProps">
      <Col v-bind="gridColProps">
        <slot name="label">Label</slot>
      </Col>
      <Col v-bind="gridColProps">
        <slot name="content">Content</slot>
      </Col>
    </Row>
  </div>
</template>
