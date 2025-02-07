<script setup lang="ts">
import { useAttrs } from 'vue';

defineOptions({
  inheritAttrs: false
})

interface Props {
  label?: string
  modelValue?: string | number
}

const attrs = useAttrs()

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
  <div class="flex flex-col">
    <label v-if="label" :for="label">{{ label }}:</label>
    <input :value="modelValue" v-bind="attrs" class="grow" :id="label" @input="handleInput" />
  </div>
</template>
