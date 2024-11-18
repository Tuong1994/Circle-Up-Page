<script setup lang="ts">
import ListGrid from '@/components/View/ListGrid/ListGrid.vue'
import FriendsCard from '@/features/friends/FriendsCard.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <ListGrid :title="t.lang.friends.subTitle" :md="2" :lg="3" :span="4" rootClassName="friends-list">
    <FriendsCard v-for="item in 10" />
  </ListGrid>
</template>
