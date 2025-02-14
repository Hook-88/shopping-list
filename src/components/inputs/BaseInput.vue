<script setup lang="ts">
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

</script>

<template>
  <div>
    <label :for="label" v-if="label">{{ label }}:</label>
    <br v-if="label">
    <input v-bind="$attrs" class="w-full bg-ash/10 px-2 py-1 rounded-sm" :value="modelValue" @input="handleInput">
  </div>
</template>
