<script setup lang="ts">
import { Typography, Image } from '@/components/UI'

const { Paragraph } = Typography
</script>

<template>
  <Paragraph>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati consectetur eaque veritatis,
    accusantium libero doloribus neque ducimus ab unde quam delectus assumenda aperiam deleniti sapiente, fuga
    recusandae laborum blanditiis nihil.
  </Paragraph>
  <div class="mt-5 mb-5">
    <Image rootClassName="post-image" />
  </div>
</template>
