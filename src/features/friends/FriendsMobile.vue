<script setup lang="ts">
import { Typography, Divider, Button, Space } from '@/components/UI'
import FriendsItem from './FriendsItem.vue';
import useLayoutStore from '@/components/UI/Layout/LayoutStore';

const { Paragraph } = Typography

const layout = useLayoutStore()
</script>

<template>
  <div class="friends-mobile">
    <Paragraph :size="20" :weight="600" rootClassName="mb-5">Friends</Paragraph>
    <Space>
      <Button :shape="layout.shape" sizes="sm">Friends requests</Button>
      <Button :shape="layout.shape" sizes="sm">Suggestions</Button>
      <Button :shape="layout.shape" sizes="sm">All friends</Button>
    </Space>
    <Divider />
    <Paragraph :size="16" :weight="600">People you may know</Paragraph>
    <FriendsItem v-for="item in 100" />
  </div>
</template>
