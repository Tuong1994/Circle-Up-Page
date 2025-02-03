<script setup lang="ts">
import { Space, Card, Loading } from '@/components/UI'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Skeleton } = Loading

const layout = useLayoutStore()
</script>

<template>
  <Space v-for="item in 4" rootClassName="mb-5">
    <Skeleton type="image" :options="{ size: 35, shape: layout.shape }" />
    <Card>
      <template #body>
        <Skeleton
          type="paragraph"
          rootClassName="!m-0"
          :options="{ lines: 3, width: 100, shape: layout.shape, linesStyle: { height: '5px' } }"
        />
      </template>
    </Card>
  </Space>
</template>
