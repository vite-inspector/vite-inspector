<script setup lang="ts" name="TheCounter">
import type { Counter } from '~/components/counter/prop'
const props = defineProps<Counter>()

const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <div inline-flex m="y-3">
    <button class="dec" btn p-2 rounded-full @click="dec()">
      <div i-carbon-subtract />
    </button>
    <div font="mono" w="15" m-auto inline-block>
      {{ count }}
    </div>
    <button class="inc" btn p-2 rounded-full @click="inc()">
      <div i-carbon-add />
    </button>
  </div>
</template>
