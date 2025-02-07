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
    <select :value="modelValue" v-bind="attrs" @change="handleChange" class="border border-white/10">
      <option value="x">X</option>
      <option value="lb">Lb</option>
      <option value="gr">Gr</option>
    </select>
  </div>
</template>
