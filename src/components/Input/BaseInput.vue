<script setup lang="ts">

import { ref } from 'vue'

defineProps<{
  label?: string
  modelValue: string | number
}>()


const emit = defineEmits(['update:modelValue'])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const inputRef = ref<HTMLInputElement | null>(null)

defineExpose({
  focus: () => inputRef.value?.focus()
})

</script>


<template>
  <div>
    <label v-if="label">{{ label }}:</label>
    <br v-if="label" />
    <input class="w-full px-2 py-1 rounded border border-[#d1d2d3]/20 bg-transparent" :value="modelValue"
      @input="handleInput" v-bind="$attrs" ref="inputRef">
  </div>
</template>
