<script setup lang="ts" name="TheInput">
import type { Input } from '~/components/input/prop'
const { modelValue } = defineProps<Input>()
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <input
    id="input"
    v-model="value"
    type="text"
    v-bind="$attrs"
    p="x-4 y-2"
    w="250px"
    text="center"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
  >
</template>
