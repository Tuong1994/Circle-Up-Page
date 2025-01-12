<script setup lang="ts">
import { Typography, Divider, Button, Card, Space } from '@/components/UI'
import FriendsItem from '@/components/View/AppContainer/AppLayout/Side/Friends/FriendsItem.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Paragraph } = Typography

const layout = useLayoutStore()

const t = useLangStore()
</script>

<template>
  <div class="friends-mobile">
    <Card>
      <template #body>
        <Paragraph :size="20" :weight="600" rootClassName="mb-5">
          {{ t.lang.friends.sideMenu.friends }}
        </Paragraph>
        <Space>
          <Button :color="layout.color" :shape="layout.shape" sizes="sm">
            {{ t.lang.friends.sideMenu.requests.title }}
          </Button>
          <Button :color="layout.color" :shape="layout.shape" sizes="sm">
            {{ t.lang.friends.sideMenu.suggestions.title }}
          </Button>
          <Button :color="layout.color" :shape="layout.shape" sizes="sm">
            {{ t.lang.friends.sideMenu.list.title }}
          </Button>
        </Space>
        <Divider />
        <Paragraph :size="16" :weight="600">
          {{ t.lang.friends.subTitle }}
        </Paragraph>
        <FriendsItem v-for="item in 100" />
      </template>
    </Card>
  </div>
</template>
