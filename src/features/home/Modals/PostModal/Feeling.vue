<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue'
import { Button, Icon, Grid, Space, Avatar } from '@/components/UI'
import { Input } from '@/components/Control'
import { iconName } from '@/components/UI/Icon/constant'
import { EFeeling } from './enum'
import type { ControlColor } from '@/components/Control/type'
import type { ButtonProps } from '@/components/UI/Button/Button.vue'
import ModalNavigator from '../Components/ModalNavigator.vue'
import ModalBody from '../Components/ModalBody.vue'
import ModalFoot from '../Components/ModalFoot.vue'
import ItemWrapper from '@/components/View/ItemWrapper/ItemWrapper.vue'
import useLayoutStore from '@/components/UI/Layout/LayoutStore'
import useLangStore from '@/stores/LangStore'

const { Row, Col } = Grid

interface FeelingProps {
  buttonProps: ButtonProps;
}

defineProps<FeelingProps>()

const emits = defineEmits(['onBack'])

const t = useLangStore()

const layout = useLayoutStore()

const feelings = computed(() => [
  [
    { icon: '😊', title: t.lang.home.modal.feeling.happy, type: EFeeling.HAPPY },
    { icon: '😢', title: t.lang.home.modal.feeling.sad, type: EFeeling.SAD }
  ],
  [
    { icon: '😍', title: t.lang.home.modal.feeling.loved, type: EFeeling.LOVED },
    { icon: '😠', title: t.lang.home.modal.feeling.angry, type: EFeeling.ANGRY }
  ],
  [
    { icon: '😕', title: t.lang.home.modal.feeling.confused, type: EFeeling.CONFUSED },
    { icon: '😌', title: t.lang.home.modal.feeling.content, type: EFeeling.CONTENT }
  ],
  [
    { icon: '😴', title: t.lang.home.modal.feeling.tired, type: EFeeling.TIRED },
    { icon: '🎉', title: t.lang.home.modal.feeling.excited, type: EFeeling.EXCITED }
  ],
  [
    { icon: '😇', title: t.lang.home.modal.feeling.blessed, type: EFeeling.BLESSED },
    { icon: '😡', title: t.lang.home.modal.feeling.furious, type: EFeeling.FURIOUS }
  ],
  [
    { icon: '😭', title: t.lang.home.modal.feeling.heartbroken, type: EFeeling.HEARTBROKEN },
    { icon: '🤒', title: t.lang.home.modal.feeling.sick, type: EFeeling.SICK }
  ],
  [
    { icon: '😎', title: t.lang.home.modal.feeling.cool, type: EFeeling.COOL },
    { icon: '🤔', title: t.lang.home.modal.feeling.thoughtful, type: EFeeling.THOUGHTFUL }
  ],
  [
    { icon: '😨', title: t.lang.home.modal.feeling.worried, type: EFeeling.WORRIED },
    { icon: '😜', title: t.lang.home.modal.feeling.silly, type: EFeeling.SILLY }
  ],
  [
    { icon: '😅', title: t.lang.home.modal.feeling.embarrassed, type: EFeeling.EMBARRASSED },
    { icon: '😔', title: t.lang.home.modal.feeling.depressed, type: EFeeling.DEPRESSED }
  ],
  [
    { icon: '😤', title: t.lang.home.modal.feeling.frustrated, type: EFeeling.FRUSTRATED },
    { icon: '😱', title: t.lang.home.modal.feeling.shocked, type: EFeeling.SHOCKED }
  ],
  [
    { icon: '😏', title: t.lang.home.modal.feeling.satisfied, type: EFeeling.SATISFIED },
    { icon: '😢', title: t.lang.home.modal.feeling.lonely, type: EFeeling.LONELY }
  ],
  [
    { icon: '😬', title: t.lang.home.modal.feeling.nervous, type: EFeeling.NERVOUS },
    { icon: '😶', title: t.lang.home.modal.feeling.speechless, type: EFeeling.SPEECHLESS }
  ],
  [
    { icon: '😄', title: t.lang.home.modal.feeling.amused, type: EFeeling.AMUSED },
    { icon: '😋', title: t.lang.home.modal.feeling.hungry, type: EFeeling.HUNGRY }
  ],
  [
    { icon: '🤤', title: t.lang.home.modal.feeling.craving, type: EFeeling.CRAVING },
    { icon: '🤗', title: t.lang.home.modal.feeling.grateful, type: EFeeling.GRATEFUL }
  ],
  [
    { icon: '🙏', title: t.lang.home.modal.feeling.thankful, type: EFeeling.THANKFUL },
    { icon: '😳', title: t.lang.home.modal.feeling.awkward, type: EFeeling.AWKWARD }
  ],
  [
    { icon: '🥰', title: t.lang.home.modal.feeling.adored, type: EFeeling.ADORED },
    { icon: '🤩', title: t.lang.home.modal.feeling.amazed, type: EFeeling.AMAZED }
  ],
  [
    { icon: '🥳', title: t.lang.home.modal.feeling.celebrating, type: EFeeling.CELEBRATING },
    { icon: '😷', title: t.lang.home.modal.feeling.sick, type: EFeeling.SICK }
  ],
  [
    { icon: '😒', title: t.lang.home.modal.feeling.annoyed, type: EFeeling.ANNOYED },
    { icon: '😩', title: t.lang.home.modal.feeling.stressed, type: EFeeling.STRESSED }
  ],
  [
    { icon: '😖', title: t.lang.home.modal.feeling.uncomfortable, type: EFeeling.UNCOMFORTABLE },
    { icon: '🤯', title: t.lang.home.modal.feeling.mindBlown, type: EFeeling.MIND_BLOWN }
  ],
  [
    { icon: '😕', title: t.lang.home.modal.feeling.disappointed, type: EFeeling.DISAPPOINTED },
    { icon: '🙄', title: t.lang.home.modal.feeling.indifferent, type: EFeeling.INDIFFERENT }
  ],
  [
    { icon: '🤓', title: t.lang.home.modal.feeling.nerdy, type: EFeeling.NERDY },
    { icon: '😤', title: t.lang.home.modal.feeling.determined, type: EFeeling.DETERMINED }
  ]
])

const handleBack = () => emits('onBack')
</script>

<template>
  <ModalNavigator type="sub" :title="`${t.lang.home.modal.feeling.title}?`" @onBack="handleBack" />
  <ModalBody>
    <div class="py-5">
      <Input :color="(layout.color as ControlColor)" shape="round" :placeholder="t.lang.common.form.placeholder.search">
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
    <Button v-bind="buttonProps">
      {{ t.lang.common.actions.done }}
    </Button>
  </ModalFoot>
</template>
