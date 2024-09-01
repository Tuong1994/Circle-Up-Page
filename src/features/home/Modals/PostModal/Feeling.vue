<script setup lang="ts">
import { computed, defineEmits } from 'vue'
import { Button, Icon, Grid, Space, Avatar } from '@/components/UI'
import { Input } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import { EFeeling } from './enum'
import ModalNavigator from '../Components/ModalNavigator.vue'
import ModalBody from '../Components/ModalBody.vue'
import ModalFoot from '../Components/ModalFoot.vue'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'

const { Row, Col } = Grid

const emits = defineEmits(['onBack'])

const layout = useLayoutStore()

const feelings = computed(() => [
[
    { icon: "😊", title: "Happy", type: EFeeling.HAPPY },
    { icon: "😢", title: "Sad", type: EFeeling.SAD },
  ],
  [
    { icon: "😍", title: "Loved", type: EFeeling.LOVED },
    { icon: "😠", title: "Angry", type: EFeeling.ANGRY },
  ],
  [
    { icon: "😕", title: "Confused", type: EFeeling.CONFUSED },
    { icon: "😌", title: "Content", type: EFeeling.CONTENT },
  ],
  [
    { icon: "😴", title: "Tired", type: EFeeling.TIRED },
    { icon: "🎉", title: "Excited", type: EFeeling.EXCITED },
  ],
  [
    { icon: "😇", title: "Blessed", type: EFeeling.BLESSED },
    { icon: "😡", title: "Furious", type: EFeeling.FURIOUS },
  ],
  [
    { icon: "😭", title: "Heartbroken", type: EFeeling.HEARTBROKEN },
    { icon: "🤒", title: "Sick", type: EFeeling.SICK },
  ],
  [
    { icon: "😎", title: "Cool", type: EFeeling.COOL },
    { icon: "🤔", title: "Thoughtful", type: EFeeling.THOUGHTFUL },
  ],
  [
    { icon: "😨", title: "Worried", type: EFeeling.WORRIED },
    { icon: "😜", title: "Silly", type: EFeeling.SILLY },
  ],
  [
    { icon: "😅", title: "Embarrassed", type: EFeeling.EMBARRASSED },
    { icon: "😔", title: "Depressed", type: EFeeling.DEPRESSED },
  ],
  [
    { icon: "😤", title: "Frustrated", type: EFeeling.FRUSTRATED },
    { icon: "😱", title: "Shocked", type: EFeeling.SHOCKED },
  ],
  [
    { icon: "😏", title: "Satisfied", type: EFeeling.SATISFIED },
    { icon: "😢", title: "Lonely", type: EFeeling.LONELY },
  ],
  [
    { icon: "😬", title: "Nervous", type: EFeeling.NERVOUS },
    { icon: "😶", title: "Speechless", type: EFeeling.SPEECHLESS },
  ],
  [
    { icon: "😄", title: "Amused", type: EFeeling.AMUSED },
    { icon: "😋", title: "Hungry", type: EFeeling.HUNGRY },
  ],
  [
    { icon: "🤤", title: "Craving", type: EFeeling.CRAVING },
    { icon: "🤗", title: "Grateful", type: EFeeling.GRATEFUL },
  ],
  [
    { icon: "🙏", title: "Thankful", type: EFeeling.THANKFUL },
    { icon: "😳", title: "Awkward", type: EFeeling.AWKWARD },
  ],
  [
    { icon: "🥰", title: "Adored", type: EFeeling.ADORED },
    { icon: "🤩", title: "Amazed", type: EFeeling.AMAZED },
  ],
  [
    { icon: "🥳", title: "Celebrating", type: EFeeling.CELEBRATING },
    { icon: "😷", title: "Sick", type: EFeeling.SICK },
  ],
  [
    { icon: "😒", title: "Annoyed", type: EFeeling.ANNOYED },
    { icon: "😩", title: "Stressed", type: EFeeling.STRESSED },
  ],
  [
    { icon: "😖", title: "Uncomfortable", type: EFeeling.UNCOMFORTABLE },
    { icon: "🤯", title: "Mind-blown", type: EFeeling.MIND_BLOWN },
  ],
  [
    { icon: "😕", title: "Disappointed", type: EFeeling.DISAPPOINTED },
    { icon: "🙄", title: "Indifferent", type: EFeeling.INDIFFERENT },
  ],
  [
    { icon: "🤓", title: "Nerdy", type: EFeeling.NERDY },
    { icon: "😤", title: "Determined", type: EFeeling.DETERMINED },
  ],
])

const handleBack = () => emits('onBack')
</script>

<template>
  <ModalNavigator type="sub" title="How are you feeling?" @onBack="handleBack" />
  <ModalBody>
    <div class="py-5">
      <Input :color="layout.color" shape="round">
        <template #addonBefore>
          <Icon :iconName="iconName.SEARCH" />
        </template>
      </Input>
    </div>
    <div class="post-content">
      <Row v-for="(groups, idx) in feelings" :key="idx" justify="between" aligns="middle">
        <Col v-for="group in groups" :key="group.title" :xs="24" :md="12" :lg="12" :span="12">
          <ItemWrapper>
            <Space aligns="middle">
              <Avatar>
                {{ group.icon }}
              </Avatar>
              <span>{{ group.title }}</span>
            </Space>
          </ItemWrapper>
        </Col>
      </Row>
    </div>
  </ModalBody>
  <ModalFoot>
    <Button rootClassName="w-full" sizes="lg" :color="layout.color">Done</Button>
  </ModalFoot>
</template>
