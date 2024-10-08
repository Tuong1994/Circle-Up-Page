<script setup lang="ts">
import FriendsGrid from '@/features/friends/FriendsGrid.vue'
import FriendsCard from '@/features/friends/FriendsCard.vue'
import useLangStore from '@/stores/LangStore'

const t = useLangStore()
</script>

<template>
  <FriendsGrid :title="t.lang.friends.subTitle">
    <FriendsCard v-for="item in 100" />
  </FriendsGrid>
</template>
