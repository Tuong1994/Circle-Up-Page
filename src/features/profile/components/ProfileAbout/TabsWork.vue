<script setup lang="ts">
import { EAboutTabFormType } from '../../enum'
import ContentView from './Common/ContentView.vue'
</script>

<template>
  <div class="tabs-work">
    <ContentView addActionTitle="Add Work" :formType="EAboutTabFormType.WORK" />
  </div>
</template>
