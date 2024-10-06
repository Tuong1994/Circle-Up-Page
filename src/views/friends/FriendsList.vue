<script setup lang="ts">
import FriendsGrid from '@/features/friends/FriendsGrid.vue'
import FriendsCard from '@/features/friends/FriendsCard.vue'
</script>

<template>
  <FriendsGrid title="People you may know">
    <FriendsCard v-for="item in 100" />
  </FriendsGrid>
</template>
