<script setup lang="ts">
import { computed } from 'vue'
import { ELang } from '@/common/enum'
import { Select } from '@/components/Control'
import type { ControlColor, ControlShape, SelectOptions } from '@/components/Control/type'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const layout = useLayoutStore()

const t = useLangStore()

const langOptions = computed<SelectOptions>(() => [
  { label: t.lang.common.header.features.profile.english, value: ELang.EN },
  { label: t.lang.common.header.features.profile.vietnamese, value: ELang.VN }
])

const handleSelectLang = (value: ELang) => t.switchLang(value)
</script>

<template>
  <Select
    rootClassName="w-44"
    :hasSearch="false"
    :hasClear="false"
    :options="langOptions"
    :defaultValue="t.locale"
    :color="layout.color as ControlColor"
    :shape="layout.shape as ControlShape"
    @onChangeSelect="handleSelectLang"
  />
</template>
