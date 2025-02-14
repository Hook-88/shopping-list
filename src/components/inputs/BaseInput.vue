<script setup lang="ts">
import { useTemplateRef } from 'vue';

interface Props {
  label?: string
  modelValue?: string | number
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

// exposing focus to parent
const inputRef = useTemplateRef<HTMLInputElement | null>('input-ref')

defineExpose({
  focus: () => inputRef.value?.focus()
})

</script>

<template>
  <label :for="label" v-if="label">{{ label }}:</label>
  <br v-if="label">
  <input ref="input-ref" v-bind="$attrs" :value="modelValue" @input="handleInput">
</template>
