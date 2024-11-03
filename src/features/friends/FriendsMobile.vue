<script setup lang="ts">
import { Typography, Divider, Button, Space } from '@/components/UI'
import FriendsItem from '@/components/View/AppMain/Menus/FriendsMenu/FriendsItem.vue';
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const layout = useLayoutStore()

const t = useLangStore()
</script>

<template>
  <div class="friends-mobile">
    <Paragraph :size="20" :weight="600" rootClassName="mb-5">
      {{ t.lang.friends.sideMenu.friends }}
    </Paragraph>
    <Space>
      <Button :shape="layout.shape" sizes="sm">
        {{ t.lang.friends.sideMenu.requests.title }}
      </Button>
      <Button :shape="layout.shape" sizes="sm">
        {{ t.lang.friends.sideMenu.suggestions.title }}
      </Button>
      <Button :shape="layout.shape" sizes="sm">
        {{ t.lang.friends.sideMenu.list.title }}
      </Button>
    </Space>
    <Divider />
    <Paragraph :size="16" :weight="600">
      {{ t.lang.friends.subTitle }}
    </Paragraph>
    <FriendsItem v-for="item in 100" />
  </div>
</template>
