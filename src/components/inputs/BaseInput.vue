<script setup lang="ts">
interface Props {
  label?: string
  modelValue: string | number
}

defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | string): void
}>()



function handleOnInput(event: Event) {
  const target = event.target as HTMLInputElement

  emit('update:modelValue', target.value)
}

</script>

<template>
  <div>
    <label v-if="label">{{ label }}:</label>
    <br>
    <input v-bind="$attrs" class="w-full py-1 px-2 bg-white/10 rounded-sm" @input="handleOnInput" :value="modelValue">
  </div>
</template>
