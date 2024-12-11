<script setup lang="ts">
import { Button } from '@/components/UI'
import { Input } from '@/components/Control'
import { routePaths } from '@/router'
import ContentHead from '../../Components/ContentHead.vue'
import ContentBody from '../../Components/ContentBody.vue'
import AudiencesButton from '@/components/View/Audiences/AudiencesButton.vue'
</script>

<template>
  <ContentHead :hasSubLink="false" :backPath="routePaths.PROFILE"> Create album </ContentHead>
  <ContentBody>
    <AudiencesButton shape="round" />
    <Input />
  </ContentBody>
</template>
