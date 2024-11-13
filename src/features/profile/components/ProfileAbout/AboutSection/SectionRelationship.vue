<script setup lang="ts">
import { iconName } from '@/components/UI/Icon/constant'
import { EAboutTabFormType } from '../../../enum'
import type { ProfileRelationship } from '../../../type'
import ContentEmpty from '../Common/ContentEmpty.vue'
import ContentView from '../Common/ContentView.vue'
import useAuthStore from '@/stores/AuthStore'
import useLangStore from '@/stores/LangStore'

const auth = useAuthStore()

const t = useLangStore()

const item: ProfileRelationship = {
  id: '1',
  relationship: 'Single'
}

const isEmpty = () => !auth.isAuth && !item.relationship
</script>

<template>
  <div class="tabs-relationship">
    <ContentEmpty
      v-if="isEmpty()"
      :icon="iconName.HEART"
      :message="t.lang.profile.about.tabsContent.empty.relationship"
    />
    <ContentView
      v-else
      :text="item.relationship"
      :icon="iconName.HEART"
      :formType="EAboutTabFormType.RELATIONSHIP"
      :addActionTitle="t.lang.profile.actions.addRelationship"
    />
  </div>
</template>
