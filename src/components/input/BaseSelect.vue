<script setup lang="ts">
import { useAttrs } from 'vue';

defineOptions({
  inheritAttrs: false
})

const attrs = useAttrs()

interface Props {
  label?: string
  modelValue?: string | number
}

withDefaults(defineProps<Props>(), {
  label: '',
  modelValue: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function handleChange(event: Event) {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}

</script>

<template>
  <div class="flex flex-col gap-0.5 grow">
    <label v-if="label" :for="label">{{ label }}:</label>
    <select :value="modelValue" v-bind="attrs" @change="handleChange">
      <option value="X">X</option>
      <option value="Lb">Lb</option>
      <option value="Gr">Gr</option>
    </select>
  </div>
</template>
