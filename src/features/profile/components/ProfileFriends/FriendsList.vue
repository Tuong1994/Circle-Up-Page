<script setup lang="ts">
import { defineProps } from 'vue'
import { Grid } from '@/components/UI'
import FriendsListItem from './FriendsListItem.vue'
import FriendsItem from '@/components/View/AppContainer/AppLayout/Side/Friends/FriendsItem.vue'

const { Row, Col } = Grid

interface FriendsListProps {
  responsive?: boolean
}

defineProps<FriendsListProps>()
</script>

<template>
  <Row v-if="!responsive" justify="between">
    <Col v-for="item in 10" :md="12" :lg="12" :span="12">
      <FriendsListItem />
    </Col>
  </Row>
  <template v-if="responsive">
    <FriendsItem v-for="item in 10" />
  </template>
</template>
