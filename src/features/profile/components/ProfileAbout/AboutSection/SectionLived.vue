<script setup lang="ts">
import { computed } from 'vue'
import { iconName } from '@/components/UI/Icon/constant'
import { EAboutTabFormType } from '../../../enum'
import type { ProfileLived } from '../../../type'
import ContentView from '../Common/ContentView.vue'
import ContentEmpty from '../Common/ContentEmpty.vue'
import useAuthStore from '@/stores/AuthStore'
import useLangStore from '@/stores/LangStore'

const auth = useAuthStore()

const t = useLangStore()

const item: ProfileLived = {
  id: '1',
  city: 'Ho Chi Minh City',
  town: 'District 11'
}

const isEmpty = computed<boolean>(() => Boolean(!auth.isAuth && !item))

const getText = () => `${t.lang.profile.about.tabsContent.lived} ${item.town}, ${item.city}`
</script>

<template>
  <div class="tabs-lived">
    <ContentEmpty
      v-if="isEmpty"
      :icon="iconName.MAP_MARKER_ALT"
      :message="t.lang.profile.about.tabsContent.empty.lived"
    />
    <ContentView
      v-if="!isEmpty"
      :text="getText()"
      :icon="iconName.MAP_MARKER_ALT"
      :formType="EAboutTabFormType.LIVED"
      :livedFormProps="{ profileLived: item }"
      :addActionTitle="t.lang.profile.actions.addLived"
    />
  </div>
</template>
