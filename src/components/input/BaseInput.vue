<script setup lang="ts">
interface Props {
  label: string
  modelValue: string | number
}

withDefaults(defineProps<Props>(), {
  label: '',
  modelValue: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}



</script>

<template>
  <label v-if="label" :for="label">{{ label }}:</label>
  <input :value="modelValue" v-model="$attrs" :id="label" @input="handleInput" />
</template>
